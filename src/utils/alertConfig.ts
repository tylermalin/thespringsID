// Central configuration for alerts and notices
// Spa owners can easily modify this file to update notices across the site

export interface AlertConfig {
  id: string;
  type: 'closure' | 'announcement' | 'promotion' | 'weather' | 'maintenance';
  title: string;
  message: string;
  ctaText?: string;
  ctaLink?: string;
  startDate?: string; // ISO date string
  endDate?: string; // ISO date string
  isActive: boolean;
  priority: 'low' | 'medium' | 'high';
  showOnPages: string[]; // page names where alert should show
  styling: {
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
    buttonStyle: 'default' | 'outline' | 'ghost';
    buttonColors: {
      background: string;
      text: string;
      border?: string;
      hover: {
        background: string;
        text: string;
      };
    };
  };
}

// ALERT CONFIGURATION
// Spa owners: Edit the alerts below to manage notices across your website
export const ACTIVE_ALERTS: AlertConfig[] = [
  // Temp closure notice - now managed via admin dashboard
  // {
  //   id: 'temp-closure-2025',
  //   type: 'closure',
  //   title: 'Temporary Closure Notice',
  //   message: 'The Springs will be closed July 21st through August 30th, 2025 for remodeling. Inn The Pines remains open during this time. Guests staying at Inn The Pines during the closure will receive a hotel discount when The Springs reopens.',
  //   ctaText: 'Book Inn The Pines',
  //   ctaLink: '/accommodations',
  //   startDate: '2025-01-01',
  //   endDate: '2025-09-01',
  //   isActive: false,
  //   priority: 'high',
  //   showOnPages: ['experiences', 'spa', 'faqs', 'policies'],
  //   styling: {
  //     backgroundColor: 'bg-black',
  //     textColor: 'text-white',
  //     borderColor: 'border-white/20',
  //     buttonStyle: 'default',
  //     buttonColors: {
  //       background: 'bg-white',
  //       text: 'text-black',
  //       border: 'border-white',
  //       hover: {
  //         background: 'bg-gray-100',
  //         text: 'text-black'
  //       }
  //     }
  //   }
  // },
  // Example of how to add more alerts:
  /*
  {
    id: 'winter-hours',
    type: 'announcement',
    title: 'Winter Hours Update',
    message: 'Starting December 1st, we will be operating on winter hours: 10 AM - 8 PM daily.',
    isActive: false, // Set to true to activate
    priority: 'medium',
    showOnPages: ['index', 'experiences'],
    styling: {
      backgroundColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      buttonStyle: 'outline',
      buttonColors: {
        background: 'bg-transparent',
        text: 'text-blue-700',
        border: 'border-blue-300',
        hover: {
          background: 'bg-blue-100',
          text: 'text-blue-800'
        }
      }
    }
  }
  */
];

// Helper functions for spa owners
export const getActiveAlertsForPage = (pageName: string): AlertConfig[] => {
  // Try to load from localStorage first (admin-managed alerts)
  const stored = localStorage.getItem('springs_alerts');
  const alerts = stored ? JSON.parse(stored) : ACTIVE_ALERTS;
  
  return alerts.filter((alert: AlertConfig) => 
    alert.isActive && 
    alert.showOnPages.includes(pageName) &&
    isAlertInDateRange(alert)
  ).sort((a: AlertConfig, b: AlertConfig) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
};

const isAlertInDateRange = (alert: AlertConfig): boolean => {
  const now = new Date();
  const start = alert.startDate ? new Date(alert.startDate) : null;
  const end = alert.endDate ? new Date(alert.endDate) : null;
  
  if (start && now < start) return false;
  if (end && now > end) return false;
  
  return true;
};

// Quick activation functions for spa owners
export const activateAlert = (alertId: string) => {
  const alert = ACTIVE_ALERTS.find(a => a.id === alertId);
  if (alert) alert.isActive = true;
};

export const deactivateAlert = (alertId: string) => {
  const alert = ACTIVE_ALERTS.find(a => a.id === alertId);
  if (alert) alert.isActive = false;
};
