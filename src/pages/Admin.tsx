import React, { useState, useEffect } from 'react';
import { adminAuth } from '@/services/admin/authService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Settings, Bell, AlertCircle, BarChart3 } from 'lucide-react';
import BannerNotificationManager from '@/components/admin/BannerNotificationManager';
import AlertManager from '@/components/admin/AlertManager';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Footer from '@/components/Footer';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('banner');

  useEffect(() => {
    setIsAuthenticated(adminAuth.isAuthenticated());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminAuth.login(password)) {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    adminAuth.logout();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <LuxuryNavigation />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="space-y-1 text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-900 rounded-full">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="font-canela text-3xl text-slate-900">
                Admin Dashboard
              </CardTitle>
              <CardDescription className="font-avenir text-slate-600">
                Enter your password to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-avenir text-base py-6 border-slate-300 focus:border-slate-900"
                    autoFocus
                  />
                  {error && (
                    <p className="text-sm text-red-600 font-avenir">{error}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-avenir font-medium py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign In
                </Button>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 font-avenir text-center">
                    Default password: <code className="bg-slate-100 px-2 py-1 rounded">Springs2025Admin!</code>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <LuxuryNavigation />
      
      <div className="luxury-container py-8 md:py-12">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-canela text-3xl md:text-4xl text-slate-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="font-avenir text-slate-600">
                Manage notifications, alerts, and view analytics
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="font-avenir border-slate-300 hover:bg-slate-100"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-md rounded-lg p-1 h-auto">
            <TabsTrigger 
              value="banner" 
              className="font-avenir data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-md py-3"
            >
              <Bell className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Banner </span>Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="alerts"
              className="font-avenir data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-md py-3"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Alert Messages
            </TabsTrigger>
            <TabsTrigger 
              value="analytics"
              className="font-avenir data-[state=active]:bg-slate-900 data-[state=active]:text-white rounded-md py-3"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="banner" className="space-y-4">
            <BannerNotificationManager />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <AlertManager />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;

