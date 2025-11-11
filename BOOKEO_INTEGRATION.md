# Bookeo Booking Widget Integration

## Overview

The Springs website uses Bookeo's booking widget for managing reservations for soaks and private tubs. This provides a simple, embedded booking experience directly on your website.

## Widget Details

**Widget ID**: `2137PFYJL13C84C48F96`  
**Script URL**: `https://bookeo.com/widget.js?a=2137PFYJL13C84C48F96`

## Where It's Used

The Bookeo widget is integrated on the **Booking Page** at `/bookeo-integration`

### Direct Access
Visitors can access the booking page by:
- Clicking "Book Now" buttons throughout the site
- Navigating to `/bookeo-integration` directly
- Following booking links in the navigation menu

## Features

### Primary Booking Widget
- **Embedded Widget**: Loads directly on the booking page
- **Full Functionality**: Complete booking interface with date/time selection
- **Seamless Experience**: No need to leave your website

### Fallback Option
- **External Bookeo Link**: Opens Bookeo's hosted page in a new tab
- **Backup Method**: For browsers with widget compatibility issues
- **URL**: `https://www-14p.bookeo.com/bookeo/b_springs_start.html`

## What Can Be Booked

### Public Soaks
- Natural hot springs pools
- Multiple temperature options
- **From $35 per person**

### Private Tubs
- Exclusive access to private hot springs tubs
- Perfect for couples or small groups
- **From $85 per session**

## Technical Implementation

### How It Works
```javascript
// Widget loads on page mount
useEffect(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://bookeo.com/widget.js?a=2137PFYJL13C84C48F96';
  script.async = true;
  
  document.head.appendChild(script);
  
  // Cleanup on unmount
  return () => {
    if (document.head.contains(script)) {
      document.head.removeChild(script);
    }
  };
}, []);
```

### Analytics Tracking
- Page visits to `/bookeo-integration` are automatically tracked
- View booking analytics in the Admin Dashboard (`/admin`)
- Monitor conversion rates and popular booking times

## Bookeo Dashboard Access

To manage your bookings on Bookeo's platform:

1. Log into your Bookeo account
2. Manage reservations, availability, and pricing
3. View booking reports and customer information
4. Configure booking rules and restrictions

## Customization

### Changing the Widget

If you need to update the widget ID:
1. Open `/src/pages/BookeoIntegration.tsx`
2. Find line 21: `script.src = 'https://bookeo.com/widget.js?a=2137PFYJL13C84C48F96';`
3. Replace `2137PFYJL13C84C48F96` with your new widget ID
4. Also update line 119 to reflect the new ID in the display text

### Styling

The booking page uses:
- Gradient backgrounds (slate-50 to blue-50)
- Card-based layout for clear organization
- Responsive design for mobile/tablet/desktop
- Consistent with site's luxury aesthetic

## Troubleshooting

### Widget Not Loading?
1. Check browser console for errors
2. Verify widget ID is correct
3. Ensure no ad blockers are interfering
4. Use the fallback external link option

### Booking Issues?
- Check Bookeo dashboard for availability settings
- Verify business hours are configured
- Ensure services are published and active
- Contact Bookeo support for platform issues

## Contact Information

**Phone**: (208) 392-7680  
**Email**: info@thespringsid.com  
**Hours**: Daily 9:00 AM - 9:00 PM  
**Address**: 3764 Hwy 21, Idaho City, ID 83631

## Navigation Links to Booking

The booking page is linked from multiple locations:
- Homepage "Book Now" button
- Navigation menu
- Experiences page
- Hero sections
- Footer links
- Plan Your Visit section
- All CTA buttons throughout the site

This ensures visitors can easily book from anywhere on your website!

## Analytics Integration

The booking page integrates with your admin analytics dashboard:
- Tracks page visits
- Shows booking page popularity
- Monitors visitor behavior
- Available at `/admin` → Analytics tab

---

**Note**: For Inn The Pines room bookings, you'll need to integrate a separate booking system (CloudBeds or similar). This Bookeo integration is specifically for Springs experiences (soaks and private tubs).

