import { BookioAdapter } from './bookio-adapter';
import { CloudbedsAdapter } from './cloudbeds-adapter';
import {
  AvailabilityRequest,
  AvailabilityResponse,
  ReservationRequest,
  ReservationResponse,
  BookingConfig,
  AddonItem,
} from './types';

export class BookingService {
  private bookioAdapter: BookioAdapter;
  private cloudbedsAdapter: CloudbedsAdapter;
  private config: BookingConfig;

  constructor(
    bookioApiKey: string,
    cloudbedsApiKey: string,
    cloudbedsPropertyId: string,
    config: BookingConfig
  ) {
    this.bookioAdapter = new BookioAdapter(bookioApiKey);
    this.cloudbedsAdapter = new CloudbedsAdapter(cloudbedsApiKey, cloudbedsPropertyId);
    this.config = config;
  }

  /**
   * Get availability for any product type
   */
  async getAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    try {
      // Route to appropriate adapter based on product type
      if (request.product_type === 'inn') {
        return await this.cloudbedsAdapter.getAvailability(request);
      } else {
        return await this.bookioAdapter.getAvailability(request);
      }
    } catch (error) {
      console.error('Booking service availability error:', error);
      throw error;
    }
  }

  /**
   * Create a reservation using the appropriate adapter
   */
  async createReservation(request: ReservationRequest): Promise<ReservationResponse> {
    try {
      // Validate request
      this.validateReservationRequest(request);

      // Route to appropriate adapter
      if (request.product_type === 'inn') {
        return await this.cloudbedsAdapter.createReservation(request);
      } else {
        return await this.bookioAdapter.createReservation(request);
      }
    } catch (error) {
      console.error('Booking service reservation error:', error);
      throw error;
    }
  }

  /**
   * Get add-ons for a specific product type
   */
  async getAddons(productType: 'soak' | 'private_tub' | 'spa' | 'inn'): Promise<AddonItem[]> {
    try {
      if (productType === 'inn') {
        return await this.cloudbedsAdapter.getAddons();
      } else {
        return await this.bookioAdapter.getAddons(productType);
      }
    } catch (error) {
      console.error('Booking service addons error:', error);
      return [];
    }
  }

  /**
   * Cancel a reservation
   */
  async cancelReservation(
    reservationId: string,
    sourceSystem: 'bookio' | 'cloudbeds'
  ): Promise<boolean> {
    try {
      if (sourceSystem === 'cloudbeds') {
        return await this.cloudbedsAdapter.cancelReservation(reservationId);
      } else {
        return await this.bookioAdapter.cancelReservation(reservationId);
      }
    } catch (error) {
      console.error('Booking service cancellation error:', error);
      return false;
    }
  }

  /**
   * Get booking configuration
   */
  getConfig(): BookingConfig {
    return this.config;
  }

  /**
   * Calculate total price including add-ons and fees
   */
  calculateTotal(
    basePrice: number,
    addons: AddonItem[],
    productType: 'soak' | 'private_tub' | 'spa' | 'inn'
  ): {
    subtotal: number;
    tax: number;
    serviceFee: number;
    total: number;
    breakdown: { label: string; amount: number }[];
  } {
    const subtotal = basePrice + addons.reduce((sum, addon) => sum + (addon.price * addon.qty), 0);
    const tax = subtotal * this.config.fees.tax_rate;
    const serviceFee = subtotal * this.config.fees.service_fee;
    const total = subtotal + tax + serviceFee;

    const breakdown = [
      { label: 'Base Price', amount: basePrice },
      ...addons.map(addon => ({ label: addon.name, amount: addon.price * addon.qty })),
      { label: 'Tax', amount: tax },
      { label: 'Service Fee', amount: serviceFee },
    ];

    return {
      subtotal,
      tax,
      serviceFee,
      total,
      breakdown,
    };
  }

  /**
   * Validate party size against product type limits
   */
  validatePartySize(
    adults: number,
    children: number,
    productType: 'soak' | 'private_tub' | 'spa' | 'inn'
  ): { valid: boolean; message?: string } {
    const total = adults + children;
    const maxOccupancy = this.config.max_occupancy[productType];
    const ageMinimum = this.config.age_minimums[productType];

    if (total > maxOccupancy) {
      return {
        valid: false,
        message: `Maximum ${maxOccupancy} guests allowed for ${productType}`,
      };
    }

    if (children > 0 && ageMinimum > 0) {
      return {
        valid: false,
        message: `Minimum age ${ageMinimum} required for ${productType}`,
      };
    }

    return { valid: true };
  }

  /**
   * Check if a date is blacked out
   */
  isBlackoutDate(date: string): boolean {
    return this.config.blackout_dates.includes(date);
  }

  /**
   * Validate reservation request
   */
  private validateReservationRequest(request: ReservationRequest): void {
    // Validate party size
    const partyValidation = this.validatePartySize(
      request.party.adults,
      request.party.children,
      request.product_type
    );
    if (!partyValidation.valid) {
      throw new Error(partyValidation.message);
    }

    // Validate blackout dates
    if (this.isBlackoutDate(request.date)) {
      throw new Error('Selected date is not available for booking');
    }

    // Validate required fields
    if (!request.guest.name || !request.guest.email || !request.guest.phone) {
      throw new Error('Guest information is required');
    }

    if (!request.policies_ack) {
      throw new Error('Policies must be acknowledged');
    }

    // Validate product-specific requirements
    if (request.product_type === 'inn' && !request.room_id) {
      throw new Error('Room selection is required for Inn stays');
    }

    if (['soak', 'private_tub', 'spa'].includes(request.product_type) && !request.time_slot_id) {
      throw new Error('Time slot selection is required');
    }
  }

  /**
   * Get upsell suggestions based on current selection
   */
  async getUpsellSuggestions(
    currentProduct: 'soak' | 'private_tub' | 'spa' | 'inn',
    selectedDate: string,
    partySize: number
  ): Promise<{ product: string; message: string; price: string }[]> {
    const suggestions = [];

    // Suggest private tub after soak selection
    if (currentProduct === 'soak') {
      suggestions.push({
        product: 'private_tub',
        message: 'Add a private tub session for ultimate relaxation',
        price: 'from $85',
      });
    }

    // Suggest spa treatments for Inn stays
    if (currentProduct === 'inn') {
      suggestions.push({
        product: 'spa',
        message: 'Enhance your stay with a spa treatment',
        price: 'from $120',
      });
    }

    // Suggest evening soak for day visitors
    if (['spa', 'private_tub'].includes(currentProduct)) {
      suggestions.push({
        product: 'soak',
        message: 'Extend your experience with an evening soak',
        price: 'from $35',
      });
    }

    return suggestions;
  }
}
