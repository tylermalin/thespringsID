import React, { useState, useEffect } from 'react';
import { analyticsService, AnalyticsSummary } from '@/services/admin/analyticsService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Users, Eye, TrendingUp, Calendar, RefreshCw } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [daysBack, setDaysBack] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadAnalytics();
  }, [daysBack]);

  const loadAnalytics = () => {
    setIsLoading(true);
    setTimeout(() => {
      const data = analyticsService.getSummary(daysBack);
      setSummary(data);
      setIsLoading(false);
    }, 300);
  };

  const handleRefresh = () => {
    loadAnalytics();
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
      analyticsService.clearAll();
      loadAnalytics();
    }
  };

  if (!summary) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 font-avenir">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-canela text-2xl text-slate-900">
                Analytics Dashboard
              </CardTitle>
              <CardDescription className="font-avenir">
                Track visitor behavior and page performance
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Select value={daysBack.toString()} onValueChange={(value) => setDaysBack(parseInt(value))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 font-avenir text-sm mb-1">Total Page Views</p>
                <p className="text-4xl font-canela font-bold">{summary.totalPageViews.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Eye className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 font-avenir text-sm mb-1">Unique Visitors</p>
                <p className="text-4xl font-canela font-bold">{summary.uniqueVisitors.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Users className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 font-avenir text-sm mb-1">Avg. Views/Day</p>
                <p className="text-4xl font-canela font-bold">
                  {Math.round(summary.totalPageViews / daysBack).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            Top Pages
          </CardTitle>
          <CardDescription className="font-avenir">
            Most visited pages in the selected time period
          </CardDescription>
        </CardHeader>
        <CardContent>
          {summary.topPages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500 font-avenir">No page views recorded yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {summary.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-slate-900 text-white rounded-full font-avenir font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-avenir font-medium text-slate-900">{page.page}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-2xl font-canela font-bold text-slate-900">{page.views.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 font-avenir">views</p>
                    </div>
                    <div className="w-32 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(page.views / summary.topPages[0].views) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Views by Day */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            Views by Day
          </CardTitle>
          <CardDescription className="font-avenir">
            Daily page view trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          {summary.viewsByDay.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500 font-avenir">No daily data available yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {summary.viewsByDay.slice(-14).map((day) => {
                const maxViews = Math.max(...summary.viewsByDay.map(d => d.views));
                const percentage = (day.views / maxViews) * 100;
                const date = new Date(day.date);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                
                return (
                  <div key={day.date} className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <p className="text-sm font-avenir text-slate-600">{dayName}</p>
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="flex-1 bg-slate-100 rounded-full h-8 relative overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                          style={{ width: `${Math.max(percentage, 5)}%` }}
                        >
                          <span className="text-white font-avenir font-bold text-sm">{day.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            Recent Activity
          </CardTitle>
          <CardDescription className="font-avenir">
            Latest 20 page views
          </CardDescription>
        </CardHeader>
        <CardContent>
          {summary.recentViews.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-500 font-avenir">No recent activity</p>
            </div>
          ) : (
            <div className="space-y-2">
              {summary.recentViews.slice(0, 20).map((view, index) => {
                const date = new Date(view.timestamp);
                const timeAgo = getTimeAgo(date);
                
                return (
                  <div key={index} className="flex items-center justify-between py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-avenir font-medium text-slate-900">{view.page}</p>
                        <p className="text-xs text-slate-500 font-avenir">{timeAgo}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 font-avenir">
                      {date.toLocaleTimeString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="bg-white shadow-lg border-0 border-t-4 border-t-red-500">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            Data Management
          </CardTitle>
          <CardDescription className="font-avenir">
            Manage your analytics data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <p className="font-avenir font-medium text-slate-900 mb-1">Clear All Analytics Data</p>
              <p className="text-sm text-slate-600 font-avenir">This will permanently delete all analytics records</p>
            </div>
            <Button 
              variant="destructive" 
              onClick={handleClearData}
              className="font-avenir"
            >
              Clear Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to get relative time
function getTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString();
}

export default AnalyticsDashboard;

