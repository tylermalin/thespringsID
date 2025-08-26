import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { BookingService } from '@/services/booking/booking-service';
import { 
  BookingData, 
  AvailabilityRequest, 
  AvailabilityResponse, 
  ReservationRequest, 
  ReservationResponse,
  AddonItem,
  BookingConfig 
} from '@/services/booking/types';

// Booking state interface
interface BookingState {
  currentStep: number;
  selectedProduct: string | null;
  selectedDate: string | null;
  selectedTimeSlot: string | null;
  selectedRoom: string | null;
  party: {
    adults: number;
    children: number;
  };
  addons: AddonItem[];
  guest: {
    name: string;
    email: string;
    phone: string;
    accessibility_needs: string;
    notes: string;
    sms_updates: boolean;
  };
  policies_ack: boolean;
  availability: AvailabilityResponse | null;
  loading: boolean;
  error: string | null;
  bookingService: BookingService | null;
}

// Action types
type BookingAction =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SELECT_PRODUCT'; payload: string }
  | { type: 'SELECT_DATE'; payload: string }
  | { type: 'SELECT_TIME_SLOT'; payload: string }
  | { type: 'SELECT_ROOM'; payload: string }
  | { type: 'SET_PARTY'; payload: { adults: number; children: number } }
  | { type: 'ADD_ADDON'; payload: AddonItem }
  | { type: 'REMOVE_ADDON'; payload: string }
  | { type: 'UPDATE_ADDON_QUANTITY'; payload: { sku: string; qty: number } }
  | { type: 'UPDATE_GUEST'; payload: Partial<BookingState['guest']> }
  | { type: 'SET_POLICIES_ACK'; payload: boolean }
  | { type: 'SET_AVAILABILITY'; payload: AvailabilityResponse }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'INITIALIZE_SERVICE'; payload: BookingService }
  | { type: 'RESET_BOOKING' };

// Initial state
const initialState: BookingState = {
  currentStep: 0,
  selectedProduct: null,
  selectedDate: null,
  selectedTimeSlot: null,
  selectedRoom: null,
  party: {
    adults: 1,
    children: 0,
  },
  addons: [],
  guest: {
    name: '',
    email: '',
    phone: '',
    accessibility_needs: '',
    notes: '',
    sms_updates: false,
  },
  policies_ack: false,
  availability: null,
  loading: false,
  error: null,
  bookingService: null,
};

// Reducer function
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'SELECT_PRODUCT':
      return { 
        ...state, 
        selectedProduct: action.payload,
        selectedTimeSlot: null,
        selectedRoom: null,
        addons: [],
        currentStep: 1
      };
    
    case 'SELECT_DATE':
      return { ...state, selectedDate: action.payload };
    
    case 'SELECT_TIME_SLOT':
      return { ...state, selectedTimeSlot: action.payload };
    
    case 'SELECT_ROOM':
      return { ...state, selectedRoom: action.payload };
    
    case 'SET_PARTY':
      return { ...state, party: action.payload };
    
    case 'ADD_ADDON':
      const existingAddon = state.addons.find(addon => addon.sku === action.payload.sku);
      if (existingAddon) {
        return {
          ...state,
          addons: state.addons.map(addon =>
            addon.sku === action.payload.sku
              ? { ...addon, qty: addon.qty + 1 }
              : addon
          ),
        };
      }
      return { ...state, addons: [...state.addons, action.payload] };
    
    case 'REMOVE_ADDON':
      return {
        ...state,
        addons: state.addons.filter(addon => addon.sku !== action.payload),
      };
    
    case 'UPDATE_ADDON_QUANTITY':
      return {
        ...state,
        addons: state.addons.map(addon =>
          addon.sku === action.payload.sku
            ? { ...addon, qty: action.payload.qty }
            : addon
        ),
      };
    
    case 'UPDATE_GUEST':
      return { ...state, guest: { ...state.guest, ...action.payload } };
    
    case 'SET_POLICIES_ACK':
      return { ...state, policies_ack: action.payload };
    
    case 'SET_AVAILABILITY':
      return { ...state, availability: action.payload };
    
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'INITIALIZE_SERVICE':
      return { ...state, bookingService: action.payload };
    
    case 'RESET_BOOKING':
      return initialState;
    
    default:
      return state;
  }
}

// Context interface
interface BookingContextType {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
  // Convenience methods
  nextStep: () => void;
  prevStep: () => void;
  fetchAvailability: (request: AvailabilityRequest) => Promise<void>;
  createReservation: (request: ReservationRequest) => Promise<ReservationResponse>;
  getAddons: () => Promise<AddonItem[]>;
  calculateTotal: () => {
    subtotal: number;
    tax: number;
    serviceFee: number;
    total: number;
    breakdown: { label: string; amount: number }[];
  };
}

// Create context
const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Provider component
interface BookingProviderProps {
  children: ReactNode;
  bookingService: BookingService;
}

export function BookingProvider({ children, bookingService }: BookingProviderProps) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Initialize service
  React.useEffect(() => {
    dispatch({ type: 'INITIALIZE_SERVICE', payload: bookingService });
  }, [bookingService]);

  // Convenience methods
  const nextStep = () => {
    dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
  };

  const prevStep = () => {
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 });
    }
  };

  const fetchAvailability = async (request: AvailabilityRequest) => {
    if (!state.bookingService) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    try {
      const availability = await state.bookingService.getAvailability(request);
      dispatch({ type: 'SET_AVAILABILITY', payload: availability });
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: error instanceof Error ? error.message : 'Failed to fetch availability' 
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const createReservation = async (request: ReservationRequest): Promise<ReservationResponse> => {
    if (!state.bookingService) {
      throw new Error('Booking service not initialized');
    }
    
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    try {
      const response = await state.bookingService.createReservation(request);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to create reservation';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const getAddons = async (): Promise<AddonItem[]> => {
    if (!state.bookingService || !state.selectedProduct) {
      return [];
    }
    
    try {
      return await state.bookingService.getAddons(state.selectedProduct as any);
    } catch (error) {
      console.error('Failed to fetch add-ons:', error);
      return [];
    }
  };

  const calculateTotal = () => {
    if (!state.bookingService || !state.selectedProduct || !state.availability) {
      return {
        subtotal: 0,
        tax: 0,
        serviceFee: 0,
        total: 0,
        breakdown: [],
      };
    }

    // Get base price from availability
    let basePrice = 0;
    if (state.selectedProduct === 'inn' && state.selectedRoom) {
      const room = state.availability.rooms?.find(r => r.room_id === state.selectedRoom);
      basePrice = room?.rate || 0;
    } else if (state.selectedTimeSlot) {
      const timeSlot = state.availability.time_slots?.find(t => t.id === state.selectedTimeSlot);
      basePrice = timeSlot?.price || 0;
    }

    return state.bookingService.calculateTotal(basePrice, state.addons, state.selectedProduct as any);
  };

  const value: BookingContextType = {
    state,
    dispatch,
    nextStep,
    prevStep,
    fetchAvailability,
    createReservation,
    getAddons,
    calculateTotal,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

// Hook to use booking context
export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
