// Core booking types
export interface BookingData {
  booking_id?: string;
  product_type: 'soak' | 'private_tub' | 'spa' | 'inn';
  source_system: 'bookio' | 'cloudbeds';
  start?: string;
  end?: string;
  party: {
    adults: number;
    children: number;
  };
  room_type?: string;
  addons: AddonItem[];
  policies_ack: boolean;
  guest: GuestInfo;
  stripe_payment_intent?: string;
  system_reservation_id?: string;
  status: 'confirmed' | 'pending' | 'failed';
}

export interface GuestInfo {
  name: string;
  email: string;
  phone: string;
  accessibility_needs?: string;
  notes?: string;
  sms_updates?: boolean;
}

export interface AddonItem {
  sku: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  category: 'towels' | 'robe' | 'fb_credit' | 'celebration' | 'late_checkout' | 'wine' | 'parking';
}

// Availability types
export interface AvailabilityRequest {
  date: string;
  party: {
    adults: number;
    children: number;
  };
  product_type: 'soak' | 'private_tub' | 'spa' | 'inn';
  check_in?: string;
  check_out?: string;
}

export interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
  available: boolean;
  capacity: number;
  price: number;
  waitlist_available?: boolean;
}

export interface RoomAvailability {
  room_type: string;
  room_id: string;
  available: boolean;
  rate: number;
  max_occupancy: number;
  amenities: string[];
  images: string[];
}

export interface AvailabilityResponse {
  date: string;
  product_type: 'soak' | 'private_tub' | 'spa' | 'inn';
  time_slots?: TimeSlot[];
  rooms?: RoomAvailability[];
  blackout_reason?: string;
}

// Reservation types
export interface ReservationRequest {
  product_type: 'soak' | 'private_tub' | 'spa' | 'inn';
  date: string;
  time_slot_id?: string;
  room_id?: string;
  party: {
    adults: number;
    children: number;
  };
  guest: GuestInfo;
  addons: AddonItem[];
  policies_ack: boolean;
  stripe_payment_intent: string;
}

export interface ReservationResponse {
  success: boolean;
  reservation_id?: string;
  booking_id: string;
  status: 'confirmed' | 'pending' | 'failed';
  error_message?: string;
}

// Configuration types
export interface BookingConfig {
  policies: {
    cancellation: string;
    age_rules: string;
    health_advisories: string;
  };
  fees: {
    tax_rate: number;
    service_fee: number;
    deposit_percentage: number;
  };
  blackout_dates: string[];
  age_minimums: {
    soak: number;
    private_tub: number;
    spa: number;
    inn: number;
  };
  max_occupancy: {
    soak: number;
    private_tub: number;
    spa: number;
    inn: number;
  };
}

// Addon types
export interface AddonConfig {
  sku: string;
  name: string;
  description: string;
  price: number;
  category: 'towels' | 'robe' | 'fb_credit' | 'celebration' | 'late_checkout' | 'wine' | 'parking';
  available_for: ('soak' | 'private_tub' | 'spa' | 'inn')[];
  max_quantity?: number;
}
