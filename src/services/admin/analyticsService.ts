// Service for tracking and displaying analytics

export interface PageView {
  page: string;
  timestamp: string;
  userAgent?: string;
}

export interface AnalyticsData {
  pageViews: PageView[];
  totalVisits: number;
  uniqueVisitors: Set<string>;
}

export interface AnalyticsSummary {
  totalPageViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page: string; views: number }>;
  viewsByDay: Array<{ date: string; views: number }>;
  recentViews: PageView[];
}

const ANALYTICS_KEY = 'springs_analytics';
const VISITOR_ID_KEY = 'springs_visitor_id';

class AnalyticsService {
  private getVisitorId(): string {
    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
      visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
  }

  private getAnalytics(): PageView[] {
    const data = localStorage.getItem(ANALYTICS_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveAnalytics(pageViews: PageView[]): void {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(pageViews));
  }

  // Track a page view
  trackPageView(page: string): void {
    const pageViews = this.getAnalytics();
    const pageView: PageView = {
      page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };
    pageViews.push(pageView);
    
    // Keep only last 10000 entries to prevent localStorage overflow
    if (pageViews.length > 10000) {
      pageViews.splice(0, pageViews.length - 10000);
    }
    
    this.saveAnalytics(pageViews);
  }

  // Get analytics summary
  getSummary(daysBack: number = 30): AnalyticsSummary {
    const pageViews = this.getAnalytics();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysBack);

    // Filter to date range
    const recentViews = pageViews.filter(view => 
      new Date(view.timestamp) >= cutoffDate
    );

    // Count unique visitors (simplified - using userAgent as proxy)
    const uniqueVisitors = new Set(recentViews.map(v => v.userAgent || 'unknown')).size;

    // Top pages
    const pageCounts: Record<string, number> = {};
    recentViews.forEach(view => {
      pageCounts[view.page] = (pageCounts[view.page] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Views by day
    const viewsByDay: Record<string, number> = {};
    recentViews.forEach(view => {
      const date = new Date(view.timestamp).toISOString().split('T')[0];
      viewsByDay[date] = (viewsByDay[date] || 0) + 1;
    });
    const viewsByDayArray = Object.entries(viewsByDay)
      .map(([date, views]) => ({ date, views }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return {
      totalPageViews: recentViews.length,
      uniqueVisitors,
      topPages,
      viewsByDay: viewsByDayArray,
      recentViews: recentViews.slice(-50).reverse(), // Last 50 views
    };
  }

  // Clear all analytics (for testing/reset)
  clearAll(): void {
    localStorage.removeItem(ANALYTICS_KEY);
  }
}

export const analyticsService = new AnalyticsService();

