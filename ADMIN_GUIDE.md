# Admin Dashboard Guide

## Accessing the Admin Dashboard

1. Navigate to `/admin` on your website
2. Default password: `Springs2025Admin!`
3. **Important**: Change this password immediately after first login!

## Features Overview

The admin dashboard provides three main sections:

### 1. Banner Notifications

**What are Banner Notifications?**
- Prominent messages displayed at the top of the homepage
- Great for urgent announcements, closures, or special promotions
- Visitors can dismiss them (if you enable the option)

**How to Create a Banner Notification:**
1. Go to the "Banner Notifications" tab
2. Fill in the form:
   - **Title**: Main heading (e.g., "Temporary Closure Notice")
   - **Subtitle**: Secondary info (e.g., "Inn The Pines remains open")
   - **Message**: Full details of your announcement
   - **Type**: Choose the notification type (info, warning, success, etc.)
   - **Icon**: Select an appropriate icon
   - **Background**: Choose a color scheme
   - **Button**: Add a call-to-action button (optional)
   - **Dates**: Set when the notification should appear (optional)
   - **Active**: Toggle to show/hide immediately
   - **Dismissible**: Allow visitors to close the notification
3. Click "Create Notification"

**Best Practices:**
- Keep messages concise and clear
- Use warning/closure types for urgent information
- Set end dates to automatically remove time-sensitive messages
- Only one banner notification shows at a time (highest priority)

### 2. Alert Messages

**What are Alert Messages?**
- In-page alert sections that appear on specific pages
- Can show on multiple pages simultaneously
- Perfect for page-specific announcements

**How to Create an Alert:**
1. Go to the "Alert Messages" tab
2. Fill in the form:
   - **Title**: Alert heading
   - **Message**: Full alert text
   - **Type**: closure, announcement, promotion, weather, or maintenance
   - **Priority**: high, medium, or low (affects display order)
   - **Show on Pages**: Select which pages should display this alert
   - **Dates**: Set when the alert should appear (optional)
   - **Styling**: Choose colors and borders
   - **Button**: Add a call-to-action (optional)
3. Click "Create Alert"

**Example Use Cases:**
- Weather alerts on the Experiences page
- Maintenance notices on the Spa page
- Special promotions on multiple pages
- Seasonal hours updates

### 3. Analytics Dashboard

**What Can You Track?**
- **Total Page Views**: All page visits in the selected time period
- **Unique Visitors**: Number of different visitors
- **Top Pages**: Most visited pages ranked by popularity
- **Views by Day**: Daily traffic trends
- **Recent Activity**: Real-time view of latest page visits

**How to Use Analytics:**
1. Go to the "Analytics" tab
2. Select a time period (7 days, 30 days, 90 days, or 1 year)
3. Click "Refresh" to update the data
4. Review metrics to understand visitor behavior

**What the Data Tells You:**
- Which pages are most popular
- Best days for traffic
- Trending patterns over time
- When visitors are most active

## Tips for Success

### Managing Multiple Messages

- **Use Banner Notifications** for site-wide, urgent messages
- **Use Alert Messages** for page-specific information
- Keep active messages to a minimum to avoid overwhelming visitors
- Regularly review and deactivate outdated messages

### Scheduling Messages

- Set **Start Dates** to schedule messages in advance
- Set **End Dates** to automatically remove time-sensitive announcements
- Use this for seasonal promotions, holiday hours, etc.

### Writing Effective Messages

- Be clear and concise
- Put the most important information first
- Use buttons to direct visitors to relevant pages
- Match the message type to the urgency level

### Security

- **Change the default password immediately!**
- Don't share admin credentials
- Use the password change feature in production
- Log out when finished with admin tasks

## Technical Notes

### Data Storage

- All data is stored in the browser's localStorage
- Data persists across sessions
- For multi-device/multi-user access, you'll need to upgrade to a backend database

### Analytics Privacy

- Analytics track page views only
- No personal information is collected
- Data is stored locally in the browser
- Suitable for basic traffic monitoring

### Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Mobile-responsive design for on-the-go management

## Troubleshooting

**Q: I can't log in**
A: Try the default password `Springs2025Admin!` or clear your browser's localStorage

**Q: My notification isn't showing**
A: Check that it's set to "Active" and the date range includes today

**Q: Analytics shows no data**
A: Analytics only track visits after the system is installed. Data will accumulate over time.

**Q: Changes aren't appearing on the live site**
A: Try refreshing your browser (Ctrl+F5 or Cmd+Shift+R) to clear the cache

## Support

For technical issues or questions about the admin dashboard, please contact your web developer.

---

**Remember:** This dashboard gives you powerful control over your website's messaging. Use it to keep visitors informed and engaged!

