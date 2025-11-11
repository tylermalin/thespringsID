import React, { useState, useEffect } from 'react';
import { notificationService, BannerNotification } from '@/services/admin/notificationService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NotificationFormData {
  title: string;
  subtitle: string;
  message: string;
  type: BannerNotification['type'];
  icon: BannerNotification['icon'];
  ctaText: string;
  ctaLink: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  isDismissible: boolean;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

const BannerNotificationManager = () => {
  const [notifications, setNotifications] = useState<BannerNotification[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<NotificationFormData>({
    title: '',
    subtitle: '',
    message: '',
    type: 'info',
    icon: 'bell',
    ctaText: '',
    ctaLink: '',
    startDate: '',
    endDate: '',
    isActive: true,
    isDismissible: true,
    backgroundColor: 'bg-slate-900',
    textColor: 'text-white',
    accentColor: 'text-blue-400',
  });
  const { toast } = useToast();

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = () => {
    setNotifications(notificationService.getAll());
  };

  const handleInputChange = (field: keyof NotificationFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      notificationService.update(editingId, formData);
      toast({
        title: 'Notification Updated',
        description: 'The banner notification has been updated successfully.',
      });
    } else {
      notificationService.create(formData);
      toast({
        title: 'Notification Created',
        description: 'A new banner notification has been created.',
      });
    }

    resetForm();
    loadNotifications();
  };

  const handleEdit = (notification: BannerNotification) => {
    setFormData({
      title: notification.title,
      subtitle: notification.subtitle || '',
      message: notification.message,
      type: notification.type,
      icon: notification.icon,
      ctaText: notification.ctaText || '',
      ctaLink: notification.ctaLink || '',
      startDate: notification.startDate || '',
      endDate: notification.endDate || '',
      isActive: notification.isActive,
      isDismissible: notification.isDismissible,
      backgroundColor: notification.backgroundColor,
      textColor: notification.textColor,
      accentColor: notification.accentColor || '',
    });
    setEditingId(notification.id);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      notificationService.delete(id);
      toast({
        title: 'Notification Deleted',
        description: 'The banner notification has been removed.',
      });
      loadNotifications();
    }
  };

  const handleToggleActive = (id: string) => {
    notificationService.toggleActive(id);
    loadNotifications();
    toast({
      title: 'Status Updated',
      description: 'The notification status has been changed.',
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      message: '',
      type: 'info',
      icon: 'bell',
      ctaText: '',
      ctaLink: '',
      startDate: '',
      endDate: '',
      isActive: true,
      isDismissible: true,
      backgroundColor: 'bg-slate-900',
      textColor: 'text-white',
      accentColor: 'text-blue-400',
    });
    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Create/Edit Form */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-canela text-2xl text-slate-900">
                {isEditing ? 'Edit' : 'Create'} Banner Notification
              </CardTitle>
              <CardDescription className="font-avenir">
                Banner notifications appear at the top of the homepage
              </CardDescription>
            </div>
            {isEditing && (
              <Button variant="outline" onClick={resetForm}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="font-avenir font-medium">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                  className="font-avenir"
                  placeholder="e.g., Temporary Closure Notice"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle" className="font-avenir font-medium">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  className="font-avenir"
                  placeholder="e.g., Inn The Pines remains open"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-avenir font-medium">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                className="font-avenir min-h-[100px]"
                placeholder="Enter the full notification message..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="type" className="font-avenir font-medium">Type</Label>
                <Select value={formData.type} onValueChange={(value: any) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="closure">Closure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon" className="font-avenir font-medium">Icon</Label>
                <Select value={formData.icon} onValueChange={(value: any) => handleInputChange('icon', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bell">Bell</SelectItem>
                    <SelectItem value="alert">Alert Triangle</SelectItem>
                    <SelectItem value="calendar">Calendar</SelectItem>
                    <SelectItem value="info">Info Circle</SelectItem>
                    <SelectItem value="gift">Gift</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backgroundColor" className="font-avenir font-medium">Background</Label>
                <Select value={formData.backgroundColor} onValueChange={(value) => handleInputChange('backgroundColor', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bg-slate-900">Dark (Slate)</SelectItem>
                    <SelectItem value="bg-black">Black</SelectItem>
                    <SelectItem value="bg-blue-900">Blue</SelectItem>
                    <SelectItem value="bg-green-900">Green</SelectItem>
                    <SelectItem value="bg-amber-900">Amber</SelectItem>
                    <SelectItem value="bg-red-900">Red</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ctaText" className="font-avenir font-medium">Button Text (Optional)</Label>
                <Input
                  id="ctaText"
                  value={formData.ctaText}
                  onChange={(e) => handleInputChange('ctaText', e.target.value)}
                  className="font-avenir"
                  placeholder="e.g., Learn More"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ctaLink" className="font-avenir font-medium">Button Link (Optional)</Label>
                <Input
                  id="ctaLink"
                  value={formData.ctaLink}
                  onChange={(e) => handleInputChange('ctaLink', e.target.value)}
                  className="font-avenir"
                  placeholder="e.g., /accommodations"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startDate" className="font-avenir font-medium">Start Date (Optional)</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="font-avenir"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate" className="font-avenir font-medium">End Date (Optional)</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="font-avenir"
                />
              </div>
            </div>

            <div className="flex items-center space-x-8 pt-4 border-t">
              <div className="flex items-center space-x-3">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => handleInputChange('isActive', checked)}
                />
                <Label htmlFor="isActive" className="font-avenir font-medium cursor-pointer">
                  Active
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Switch
                  id="isDismissible"
                  checked={formData.isDismissible}
                  onCheckedChange={(checked) => handleInputChange('isDismissible', checked)}
                />
                <Label htmlFor="isDismissible" className="font-avenir font-medium cursor-pointer">
                  Dismissible
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 font-avenir text-base py-6">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? 'Update' : 'Create'} Notification
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            All Banner Notifications
          </CardTitle>
          <CardDescription className="font-avenir">
            {notifications.length} total notification{notifications.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 font-avenir text-lg mb-4">No notifications yet</p>
              <p className="text-slate-400 font-avenir text-sm">Create your first banner notification above</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-canela text-xl text-slate-900">{notification.title}</h3>
                        {notification.subtitle && (
                          <span className="text-sm text-slate-600 font-avenir">• {notification.subtitle}</span>
                        )}
                        <span className={`px-2 py-1 rounded text-xs font-avenir font-medium ${
                          notification.isActive ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {notification.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-slate-600 font-avenir text-sm mb-2">{notification.message}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-avenir">
                        <span>Type: {notification.type}</span>
                        {notification.startDate && <span>Start: {new Date(notification.startDate).toLocaleDateString()}</span>}
                        {notification.endDate && <span>End: {new Date(notification.endDate).toLocaleDateString()}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleActive(notification.id)}
                      >
                        {notification.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(notification)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(notification.id)}
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BannerNotificationManager;

