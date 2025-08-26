import { 
  AvailabilityRequest, 
  AvailabilityResponse, 
  ReservationRequest, 
  ReservationResponse,
  TimeSlot,
  AddonItem 
} from './types';

export class BookioAdapter {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.book.io') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Fetch availability for soaks, private tubs, and spa treatments
   */
  async getAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          date: request.date,
          product_type: request.product_type,
          party_size: request.party.adults + request.party.children,
          adults: request.party.adults,
          children: request.party.children,
        }),
      });

      if (!response.ok) {
        throw new Error(`Book.io API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform Book.io response to our format
      return this.transformAvailabilityResponse(data, request.product_type);
    } catch (error) {
      console.error('Book.io availability error:', error);
      throw new Error('Failed to fetch availability from Book.io');
    }
  }

  /**
   * Create a reservation in Book.io
   */
  async createReservation(request: ReservationRequest): Promise<ReservationResponse> {
    try {
      const payload = this.transformReservationRequest(request);
      
      const response = await fetch(`${this.baseUrl}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Book.io reservation error: ${errorData.message || response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        reservation_id: data.reservation_id,
        booking_id: this.generateBookingId(request.product_type),
        status: 'confirmed' as const,
      };
    } catch (error) {
      console.error('Book.io reservation error:', error);
      return {
        success: false,
        booking_id: this.generateBookingId(request.product_type),
        status: 'failed' as const,
        error_message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Cancel a reservation in Book.io
   */
  async cancelReservation(reservationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/reservations/${reservationId}/cancel`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error('Book.io cancellation error:', error);
      return false;
    }
  }

  /**
   * Get add-ons available for Book.io products
   */
  async getAddons(productType: 'soak' | 'private_tub' | 'spa'): Promise<AddonItem[]> {
    const addons: AddonItem[] = [
      {
        sku: 'TOWEL',
        name: 'Premium Towel',
        description: 'Luxury spa towel for your comfort',
        price: 8.00,
        qty: 1,
        category: 'towels',
      },
      {
        sku: 'ROBE',
        name: 'Spa Robe',
        description: 'Comfortable robe for your session',
        price: 12.00,
        qty: 1,
        category: 'robe',
      },
      {
        sku: 'FB_CREDIT_25',
        name: '$25 Food & Beverage Credit',
        description: 'Credit for our restaurant and bar',
        price: 25.00,
        qty: 1,
        category: 'fb_credit',
      },
      {
        sku: 'CELEBRATION',
        name: 'Celebration Package',
        description: 'Special touches for your special day',
        price: 35.00,
        qty: 1,
        category: 'celebration',
      },
    ];

    // Filter add-ons based on product type
    if (productType === 'spa') {
      addons.push({
        sku: 'LATE_CHECKOUT',
        name: 'Late Checkout',
        description: 'Extended time in spa facilities',
        price: 15.00,
        qty: 1,
        category: 'late_checkout',
      });
    }

    return addons;
  }

  /**
   * Transform Book.io availability response to our format
   */
  private transformAvailabilityResponse(data: any, productType: string): AvailabilityResponse {
    const timeSlots: TimeSlot[] = data.time_slots?.map((slot: any) => ({
      id: slot.id,
      start_time: slot.start_time,
      end_time: slot.end_time,
      available: slot.available,
      capacity: slot.capacity,
      price: slot.price,
      waitlist_available: slot.waitlist_available || false,
    })) || [];

    return {
      date: data.date,
      product_type: productType as any,
      time_slots: timeSlots,
      blackout_reason: data.blackout_reason,
    };
  }

  /**
   * Transform our reservation request to Book.io format
   */
  private transformReservationRequest(request: ReservationRequest): any {
    return {
      product_type: request.product_type,
      date: request.date,
      time_slot_id: request.time_slot_id,
      party_size: request.party.adults + request.party.children,
      adults: request.party.adults,
      children: request.party.children,
      guest: {
        name: request.guest.name,
        email: request.guest.email,
        phone: request.guest.phone,
        notes: request.guest.notes,
        accessibility_needs: request.guest.accessibility_needs,
      },
      addons: request.addons.map(addon => ({
        sku: addon.sku,
        quantity: addon.qty,
      })),
      payment_intent: request.stripe_payment_intent,
      policies_acknowledged: request.policies_ack,
    };
  }

  /**
   * Generate a unique booking ID
   */
  private generateBookingId(productType: string): string {
    const prefix = productType.toUpperCase().substring(0, 3);
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}-${timestamp}${random}`.toUpperCase();
  }
}
