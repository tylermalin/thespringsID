import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '@/services/admin/analyticsService';

/**
 * Hook to automatically track page views
 * Add this hook to any page component to track visits
 */
export const useAnalytics = (pageName?: string) => {
  const location = useLocation();

  useEffect(() => {
    // Get page name from location pathname if not provided
    const page = pageName || location.pathname.substring(1) || 'home';
    
    // Track the page view
    analyticsService.trackPageView(page);
  }, [location.pathname, pageName]);
};

