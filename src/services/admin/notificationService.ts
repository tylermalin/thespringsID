// Service for managing banner notifications

export interface BannerNotification {
  id: string;
  title: string;
  subtitle?: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'announcement' | 'closure';
  icon: 'bell' | 'alert' | 'calendar' | 'info' | 'gift' | 'hotel';
  ctaText?: string;
  ctaLink?: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  isDismissible: boolean;
  backgroundColor: string;
  textColor: string;
  accentColor?: string;
  createdAt: string;
  updatedAt: string;
}

const NOTIFICATIONS_KEY = 'springs_banner_notifications';

class NotificationService {
  private getNotifications(): BannerNotification[] {
    const data = localStorage.getItem(NOTIFICATIONS_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveNotifications(notifications: BannerNotification[]): void {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  }

  // Get all notifications
  getAll(): BannerNotification[] {
    return this.getNotifications();
  }

  // Get active notifications (within date range and isActive = true)
  getActive(): BannerNotification[] {
    const now = new Date();
    return this.getNotifications().filter(notification => {
      if (!notification.isActive) return false;

      if (notification.startDate) {
        const start = new Date(notification.startDate);
        if (now < start) return false;
      }

      if (notification.endDate) {
        const end = new Date(notification.endDate);
        if (now > end) return false;
      }

      return true;
    });
  }

  // Get notification by ID
  getById(id: string): BannerNotification | undefined {
    return this.getNotifications().find(n => n.id === id);
  }

  // Create new notification
  create(notification: Omit<BannerNotification, 'id' | 'createdAt' | 'updatedAt'>): BannerNotification {
    const notifications = this.getNotifications();
    const newNotification: BannerNotification = {
      ...notification,
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    notifications.push(newNotification);
    this.saveNotifications(notifications);
    return newNotification;
  }

  // Update notification
  update(id: string, updates: Partial<BannerNotification>): BannerNotification | null {
    const notifications = this.getNotifications();
    const index = notifications.findIndex(n => n.id === id);
    
    if (index === -1) return null;

    notifications[index] = {
      ...notifications[index],
      ...updates,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    this.saveNotifications(notifications);
    return notifications[index];
  }

  // Delete notification
  delete(id: string): boolean {
    const notifications = this.getNotifications();
    const filtered = notifications.filter(n => n.id !== id);
    
    if (filtered.length === notifications.length) return false;

    this.saveNotifications(filtered);
    return true;
  }

  // Toggle active status
  toggleActive(id: string): boolean {
    const notification = this.getById(id);
    if (!notification) return false;

    return !!this.update(id, { isActive: !notification.isActive });
  }
}

export const notificationService = new NotificationService();

