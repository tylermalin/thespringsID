# Booking Systems Overview

## Summary

Your website now has **two separate booking systems** for different services:

### 🏊 The Springs (Soaks & Private Tubs)
**System**: Bookeo  
**URL**: `/bookeo-integration`  
**Widget ID**: `2137PFYJL13C84C48F96`

### 🏨 Inn The Pines (Room Reservations)
**System**: ASI WebRes  
**URL**: `/inn-booking`  
**Booking Portal**: [ASI WebRes Reservation System](https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c)

---

## 🏊 The Springs Booking System

### What Can Be Booked
- **Public Soaks** - From $35/person
- **Private Tubs** - From $85/session

### Integration Type
- **Embedded Widget** - Bookeo widget loads directly on your website
- **Fallback Link** - External Bookeo page opens in new tab if widget doesn't load

### Access Points
Visitors can book Springs experiences from:
- "Book Now" buttons on Experiences page
- Hero section CTAs
- Navigation menu
- Direct URL: `/bookeo-integration`

### Technical Details
```javascript
Widget Script: https://bookeo.com/widget.js?a=2137PFYJL13C84C48F96
Fallback URL: https://www-14p.bookeo.com/bookeo/b_springs_start.html
```

### Documentation
See `BOOKEO_INTEGRATION.md` for complete details

---

## 🏨 Inn The Pines Booking System

### What Can Be Booked
- **Double Queen Room** - From $125/night (max 4 guests)
- **King Room** - From $125/night (max 2 guests)

### Integration Type
- **External Redirect** - Opens ASI WebRes in a new tab
- **Professional System** - Full-featured reservation management

### Access Points
Visitors can book Inn rooms from:
- "Book Now" buttons on Accommodations page
- "Book Your Stay" on homepage Inn section
- Navigation menu
- Direct URL: `/inn-booking`

### Technical Details
```javascript
Booking URL: https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c
```

### Documentation
See `INN_BOOKING_INTEGRATION.md` for complete details

---

## Navigation Map

### For Springs Bookings (Soaks & Private Tubs)
```
Homepage → "Book Springs" → /bookeo-integration → Bookeo Widget
Experiences Page → "Book Now" → /bookeo-integration → Bookeo Widget
Any Springs CTA → /bookeo-integration → Bookeo Widget
```

### For Inn Bookings (Room Reservations)
```
Homepage → "Book Your Stay" → Opens ASI WebRes
Accommodations Page → "Book Now" → Opens ASI WebRes
Direct Link → /inn-booking → Opens ASI WebRes
```

---

## Quick Reference Table

| Feature | The Springs (Bookeo) | Inn The Pines (ASI WebRes) |
|---------|---------------------|---------------------------|
| **What** | Soaks & Private Tubs | Room Reservations |
| **System** | Bookeo Widget | ASI WebRes Portal |
| **Type** | Embedded Widget | External Redirect |
| **Page** | `/bookeo-integration` | `/inn-booking` |
| **Pricing** | $35-$85 | $125/night |
| **Widget ID** | 2137PFYJL13C84C48F96 | 59b16d1f00e54a5a80fb29308a6daf6c |
| **Analytics** | Tracked | Tracked |

---

## Admin Dashboard Integration

Both booking pages are tracked in your analytics dashboard (`/admin`):

### View Booking Page Traffic
1. Navigate to `/admin`
2. Click "Analytics" tab
3. View page statistics for:
   - `booking` - Springs bookings (Bookeo page)
   - `inn-booking` - Inn reservations page
   - `accommodations` - Accommodations browsing

### Monitor Performance
- See which booking page gets more traffic
- Track booking page visit trends
- Understand visitor behavior

---

## Contact Information

For booking assistance:

**Phone**: (208) 392-7680  
**Email**: info@thespringsid.com  
**Hours**: Daily 9:00 AM - 9:00 PM  
**Address**: 3764 Hwy 21, Idaho City, ID 83631

---

## Updating Booking Systems

### To Change Bookeo Widget ID
1. Open `src/pages/BookeoIntegration.tsx`
2. Update line 21: `script.src = 'https://bookeo.com/widget.js?a=YOUR_NEW_ID';`
3. Update line 119 to reflect new ID in display text

### To Change ASI WebRes URL
1. Open `src/pages/InnBooking.tsx` - Update line 13
2. Open `src/pages/Accommodations.tsx` - Update line 19
3. Open `src/components/LuxuryAccommodations.tsx` - Update line 138

---

## Troubleshooting

### Springs Bookings (Bookeo)
**Issue**: Widget not loading  
**Solution**: 
- Check browser console for errors
- Verify widget ID is correct
- Disable ad blockers
- Use fallback external link

### Inn Bookings (ASI WebRes)
**Issue**: Booking page not opening  
**Solution**:
- Check pop-up blocker settings
- Ensure browser allows new tabs
- Call directly for phone reservations

### General Booking Issues
**Issue**: Guests confused about which system to use  
**Solution**:
- Clear signage on each page
- Springs experiences → Bookeo
- Room reservations → ASI WebRes
- Staff can assist at (208) 392-7680

---

## System Administration

### Bookeo Dashboard
- Manage Springs availability
- View Bookeo reservations
- Update pricing for soaks/tubs
- Configure booking rules

### ASI WebRes Dashboard
- Manage Inn availability
- View room reservations
- Update room rates
- Configure policies

### Your Website Admin (`/admin`)
- Manage notifications and alerts
- View analytics for both systems
- Track booking page traffic
- Update site messaging

---

## Files Modified

### New Files Created
- `src/pages/InnBooking.tsx` - Inn booking page
- `BOOKEO_INTEGRATION.md` - Bookeo documentation
- `INN_BOOKING_INTEGRATION.md` - ASI WebRes documentation
- `BOOKING_SYSTEMS_OVERVIEW.md` - This file

### Files Updated
- `src/pages/BookeoIntegration.tsx` - Updated widget ID + analytics
- `src/pages/Accommodations.tsx` - Updated to use ASI WebRes
- `src/components/LuxuryAccommodations.tsx` - Updated booking link
- `src/App.tsx` - Added `/inn-booking` route

---

## Best Practices

### For Site Owners
1. Keep both booking systems updated with current availability
2. Monitor analytics to see which booking page performs better
3. Respond promptly to reservations from both systems
4. Update pricing seasonally in each respective system

### For Guests
1. Clear differentiation between Springs and Inn bookings
2. Multiple access points for easy booking
3. Professional booking systems for secure transactions
4. Phone support available if online booking has issues

---

## Future Enhancements (Optional)

### Potential Improvements
1. **Unified Dashboard** - Single view of all reservations
2. **Booking Confirmation Emails** - Automated notifications
3. **Package Deals** - Combine Springs + Inn bookings
4. **Calendar Integration** - Sync both booking calendars
5. **Special Offers** - Promotional booking codes

### Integration Opportunities
- Connect booking data to admin analytics
- Track conversion rates
- A/B test booking page designs
- Add guest reviews post-booking

---

## Success Metrics

Track these metrics in your admin dashboard:
- Booking page visit-to-conversion ratio
- Most popular booking times/dates
- Average booking values
- Seasonal trends
- Source of booking traffic

---

**You now have two professional booking systems integrated seamlessly into your website!** 🎉

Guests can easily book Springs experiences through Bookeo or reserve Inn rooms through ASI WebRes, with clear paths to each system throughout your site.

