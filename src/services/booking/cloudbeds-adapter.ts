import { 
  AvailabilityRequest, 
  AvailabilityResponse, 
  ReservationRequest, 
  ReservationResponse,
  RoomAvailability,
  AddonItem 
} from './types';

export class CloudbedsAdapter {
  private apiKey: string;
  private baseUrl: string;
  private propertyId: string;

  constructor(apiKey: string, propertyId: string, baseUrl: string = 'https://hotels.cloudbeds.com/api/v1.1') {
    this.apiKey = apiKey;
    this.propertyId = propertyId;
    this.baseUrl = baseUrl;
  }

  /**
   * Fetch room availability for Inn The Pines
   */
  async getAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/getRooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          propertyID: this.propertyId,
          checkIn: request.check_in,
          checkOut: request.check_out,
          adults: request.party.adults,
          children: request.party.children,
          currency: 'USD',
        }),
      });

      if (!response.ok) {
        throw new Error(`Cloudbeds API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform Cloudbeds response to our format
      return this.transformAvailabilityResponse(data, request);
    } catch (error) {
      console.error('Cloudbeds availability error:', error);
      throw new Error('Failed to fetch availability from Cloudbeds');
    }
  }

  /**
   * Create a reservation in Cloudbeds
   */
  async createReservation(request: ReservationRequest): Promise<ReservationResponse> {
    try {
      const payload = this.transformReservationRequest(request);
      
      const response = await fetch(`${this.baseUrl}/postReservation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Cloudbeds reservation error: ${errorData.message || response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        reservation_id: data.reservationID,
        booking_id: this.generateBookingId(),
        status: 'confirmed' as const,
      };
    } catch (error) {
      console.error('Cloudbeds reservation error:', error);
      return {
        success: false,
        booking_id: this.generateBookingId(),
        status: 'failed' as const,
        error_message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Cancel a reservation in Cloudbeds
   */
  async cancelReservation(reservationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/cancelReservation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          propertyID: this.propertyId,
          reservationID: reservationId,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Cloudbeds cancellation error:', error);
      return false;
    }
  }

  /**
   * Modify a reservation in Cloudbeds
   */
  async modifyReservation(reservationId: string, updates: any): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/modifyReservation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          propertyID: this.propertyId,
          reservationID: reservationId,
          ...updates,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Cloudbeds modification error:', error);
      return false;
    }
  }

  /**
   * Get add-ons available for Inn stays
   */
  async getAddons(): Promise<AddonItem[]> {
    const addons: AddonItem[] = [
      {
        sku: 'LATE_CHECKOUT',
        name: 'Late Checkout',
        description: 'Extended checkout time until 2 PM',
        price: 25.00,
        qty: 1,
        category: 'late_checkout',
      },
      {
        sku: 'WINE_BOTTLE',
        name: 'Bottle of Wine',
        description: 'Premium local wine in your room',
        price: 45.00,
        qty: 1,
        category: 'wine',
      },
      {
        sku: 'FB_CREDIT_50',
        name: '$50 Food & Beverage Credit',
        description: 'Credit for our restaurant and bar',
        price: 50.00,
        qty: 1,
        category: 'fb_credit',
      },
      {
        sku: 'PARKING',
        name: 'Reserved Parking',
        description: 'Guaranteed parking spot during your stay',
        price: 15.00,
        qty: 1,
        category: 'parking',
      },
    ];

    return addons;
  }

  /**
   * Transform Cloudbeds availability response to our format
   */
  private transformAvailabilityResponse(data: any, request: AvailabilityRequest): AvailabilityResponse {
    const rooms: RoomAvailability[] = data.rooms?.map((room: any) => ({
      room_type: room.roomTypeName,
      room_id: room.roomTypeID,
      available: room.available,
      rate: room.rate,
      max_occupancy: room.maxOccupancy,
      amenities: room.amenities || [],
      images: room.images || [],
    })) || [];

    return {
      date: request.date,
      product_type: 'inn',
      rooms: rooms,
      blackout_reason: data.blackout_reason,
    };
  }

  /**
   * Transform our reservation request to Cloudbeds format
   */
  private transformReservationRequest(request: ReservationRequest): any {
    return {
      propertyID: this.propertyId,
      roomTypeID: request.room_id,
      checkIn: request.date,
      checkOut: request.date, // This should be calculated based on duration
      adults: request.party.adults,
      children: request.party.children,
      guest: {
        firstName: request.guest.name.split(' ')[0],
        lastName: request.guest.name.split(' ').slice(1).join(' '),
        email: request.guest.email,
        phone: request.guest.phone,
      },
      notes: this.formatNotes(request),
      paymentIntent: request.stripe_payment_intent,
      policiesAcknowledged: request.policies_ack,
    };
  }

  /**
   * Format notes for Cloudbeds including add-ons and special requests
   */
  private formatNotes(request: ReservationRequest): string {
    const notes = [];
    
    if (request.guest.accessibility_needs) {
      notes.push(`Accessibility needs: ${request.guest.accessibility_needs}`);
    }
    
    if (request.guest.notes) {
      notes.push(`Guest notes: ${request.guest.notes}`);
    }
    
    if (request.addons.length > 0) {
      const addonList = request.addons.map(addon => `${addon.name} (${addon.qty})`).join(', ');
      notes.push(`Add-ons: ${addonList}`);
    }
    
    if (request.guest.sms_updates) {
      notes.push('SMS updates requested');
    }
    
    return notes.join(' | ');
  }

  /**
   * Generate a unique booking ID for Inn stays
   */
  private generateBookingId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `INN-${timestamp}${random}`.toUpperCase();
  }
}
