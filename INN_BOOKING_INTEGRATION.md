# Inn The Pines Booking Integration

## Overview

Inn The Pines uses ASI WebRes as their online reservation system. This integration provides a seamless booking experience for room reservations at the mountain inn.

## Booking System Details

**Provider**: ASI WebRes (Anand Systems Inc.)  
**Booking URL**: `https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c`

## Where It's Integrated

### Direct Booking Page
- **URL**: `/inn-booking`
- Dedicated page with full room information and direct link to booking system
- Includes room types, amenities, and policies

### Throughout the Site
The Inn booking link is integrated in multiple locations:
- **Accommodations Page** (`/accommodations`) - All "Book Now" buttons
- **Homepage** - "Book Your Stay" button in the Inn The Pines section
- **Navigation Menu** - Direct access from site navigation

## Room Types Available

### Non-Smoking Double Queen
- **Rate**: From $125/night
- **Occupancy**: Base 2, Max 4 adults
- **Beds**: 2 Queen Beds
- **Features**:
  - Free WiFi
  - 42" Flat Screen TV
  - Keurig Coffee Maker
  - Room Refrigerator
  - Private Bathroom

### Non-Smoking King
- **Rate**: From $125/night
- **Occupancy**: Base 2 adults
- **Beds**: 1 King Bed
- **Features**:
  - Free WiFi
  - 42" Flat Screen TV
  - Keurig Coffee Maker
  - Room Refrigerator
  - Mountain Views

## How It Works

### User Flow
1. Visitor clicks any "Book Inn" or "Reserve Your Room" button
2. Opens ASI WebRes booking system in a new tab
3. User selects check-in/check-out dates
4. Chooses room type and completes reservation
5. Receives confirmation via email

### Technical Implementation
```typescript
const handleBookNow = () => {
  window.open(
    'https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c',
    '_blank'
  );
};
```

## ASI WebRes Features

The booking system provides:
- **Real-time Availability** - Live room availability checking
- **Secure Payments** - PCI-compliant payment processing
- **Multi-currency Support** - Multiple currency options
- **Multi-language** - Available in multiple languages
- **Reservation Management** - Guests can edit/cancel bookings
- **Promotion Codes** - Support for discount codes
- **Gift Certificates** - Gift certificate functionality

## Inn Policies

### Cancellation Policy
- Cancellations must be made 24 hours in advance for a full refund
- Late cancellations may be subject to fees
- Full policy details available during booking process

### Check-in/Check-out
- **Check-in**: 3:00 PM
- **Check-out**: 11:00 AM
- Early check-in/late check-out subject to availability

### Pet Policy
- Pets may be allowed in select rooms
- Additional fees may apply
- Contact property directly for details

## Analytics Integration

Inn booking page visits are tracked in the admin dashboard:
- Page view tracking for `/inn-booking`
- Monitor booking page traffic
- Available at `/admin` → Analytics tab

## Updating the Booking Link

If you need to change the booking system URL:

### Step 1: Update InnBooking.tsx
```typescript
// File: src/pages/InnBooking.tsx
// Line 13
window.open('YOUR_NEW_BOOKING_URL', '_blank');
```

### Step 2: Update Accommodations.tsx
```typescript
// File: src/pages/Accommodations.tsx
// Line 19
window.open('YOUR_NEW_BOOKING_URL', '_blank');
```

### Step 3: Update LuxuryAccommodations.tsx
```typescript
// File: src/components/LuxuryAccommodations.tsx
// Line 138
window.open('YOUR_NEW_BOOKING_URL', '_blank');
```

## ASI WebRes Admin Access

To manage your reservations on the ASI WebRes platform:

1. Log into your ASI WebRes admin panel
2. Manage room availability and pricing
3. View reservation reports
4. Update room descriptions and photos
5. Configure booking rules and restrictions

## Contact Information

**Inn The Pines**  
**Phone**: (208) 392-7680  
**Email**: info@thespringsid.com  
**Address**: 3764 Hwy 21, Idaho City, ID 83631

## Troubleshooting

### Booking System Issues
- If the external link doesn't open, check pop-up blocker settings
- For reservation issues, contact ASI WebRes support
- For availability questions, call the Inn directly

### Common Questions

**Q: Why does the booking open in a new tab?**  
A: This provides the full ASI WebRes experience while keeping your place on our website.

**Q: Can I book over the phone?**  
A: Yes! Call (208) 392-7680 for direct phone reservations.

**Q: What if I need to modify my reservation?**  
A: Use the "Edit/Cancel Booking" link on the ASI WebRes booking page.

## Integration Summary

This integration provides:
- ✅ Direct link to secure booking system
- ✅ Dedicated Inn booking page with full information
- ✅ Multiple access points throughout the website
- ✅ Analytics tracking for booking page visits
- ✅ Consistent user experience
- ✅ Professional reservation management

## Separation from Springs Bookings

**Important Note**: This system is separate from the Springs bookings (soaks and private tubs), which use Bookeo at `/bookeo-integration`.

- **Inn The Pines Rooms** → ASI WebRes (`/inn-booking`)
- **Springs Experiences** → Bookeo (`/bookeo-integration`)

This separation allows each system to be optimized for its specific booking type.

---

For technical support or questions about the integration, contact your web developer.

