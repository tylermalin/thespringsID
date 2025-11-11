import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Calendar, Info, Gift, Hotel, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { notificationService, BannerNotification } from '@/services/admin/notificationService';

const NotificationBanner = () => {
  const [notifications, setNotifications] = useState<BannerNotification[]>([]);
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    loadNotifications();
    // Check for dismissed notifications in session storage
    const dismissed = sessionStorage.getItem('dismissed_notifications');
    if (dismissed) {
      setDismissedIds(new Set(JSON.parse(dismissed)));
    }
  }, []);

  const loadNotifications = () => {
    const active = notificationService.getActive();
    setNotifications(active);
  };

  const handleClose = (id: string) => {
    const newDismissed = new Set(dismissedIds);
    newDismissed.add(id);
    setDismissedIds(newDismissed);
    sessionStorage.setItem('dismissed_notifications', JSON.stringify(Array.from(newDismissed)));
  };

  const handleCtaClick = (link?: string) => {
    if (link) {
      navigate(link);
    }
  };

  const getIcon = (iconType: BannerNotification['icon']) => {
    const iconClass = "w-4 h-4 md:w-6 md:h-6";
    switch (iconType) {
      case 'bell': return <Bell className={iconClass} />;
      case 'alert': return <AlertTriangle className={iconClass} />;
      case 'calendar': return <Calendar className={iconClass} />;
      case 'info': return <Info className={iconClass} />;
      case 'gift': return <Gift className={iconClass} />;
      case 'hotel': return <Hotel className={iconClass} />;
      default: return <Bell className={iconClass} />;
    }
  };

  // Filter out dismissed notifications
  const visibleNotifications = notifications.filter(n => !dismissedIds.has(n.id));

  if (visibleNotifications.length === 0) return null;

  // Show only the first notification (highest priority)
  const notification = visibleNotifications[0];

  return (
    <div className={`relative ${notification.backgroundColor} border-b border-white/20 shadow-lg`}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
      <div className="luxury-container relative z-10">
        <div className="flex items-start justify-between py-4 md:py-6 px-4 md:px-6">
          <div className="flex items-start gap-3 md:gap-6 flex-1">
            <div className="flex-shrink-0">
              <div className="p-1.5 md:p-2 bg-white/10 rounded-full backdrop-blur-sm">
                <div className={notification.textColor}>
                  {getIcon(notification.icon)}
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-wrap mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-canela text-sm md:text-lg font-semibold ${notification.textColor} tracking-tight`}>
                    {notification.title}
                  </span>
                </div>
                
                {notification.subtitle && (
                  <div className="flex items-center gap-2">
                    <span className={`font-avenir text-sm md:text-base font-medium ${notification.accentColor || notification.textColor}`}>
                      {notification.subtitle}
                    </span>
                  </div>
                )}
              </div>
              
              <p className={`font-avenir text-sm md:text-base ${notification.textColor} opacity-90 leading-relaxed`}>
                {notification.message}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4 flex-shrink-0 ml-3 md:ml-0">
            {notification.ctaText && notification.ctaLink && (
              <Button
                onClick={() => handleCtaClick(notification.ctaLink)}
                size="sm"
                className="font-avenir bg-white text-black hover:bg-gray-100 hover:text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs md:text-sm px-3 md:px-6 font-medium"
              >
                {notification.ctaText}
              </Button>
            )}
            
            {notification.isDismissible && (
              <button
                onClick={() => handleClose(notification.id)}
                className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Close notification"
              >
                <X className={`w-4 h-4 md:w-5 md:h-5 ${notification.textColor} opacity-60 hover:opacity-100`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
