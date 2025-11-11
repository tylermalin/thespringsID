import React, { useState, useEffect } from 'react';
import { AlertConfig, ACTIVE_ALERTS } from '@/utils/alertConfig';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Edit2, Trash2, Eye, EyeOff, Save, X, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AlertFormData {
  id: string;
  type: AlertConfig['type'];
  title: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  priority: AlertConfig['priority'];
  showOnPages: string[];
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

const AVAILABLE_PAGES = [
  'index', 'experiences', 'spa', 'accommodations', 'faqs', 
  'policies', 'about', 'contact', 'gift-cards', 'booking'
];

const AlertManager = () => {
  const [alerts, setAlerts] = useState<AlertConfig[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<AlertFormData>({
    id: '',
    type: 'announcement',
    title: '',
    message: '',
    ctaText: '',
    ctaLink: '',
    startDate: '',
    endDate: '',
    isActive: true,
    priority: 'medium',
    showOnPages: [],
    backgroundColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-200',
  });
  const { toast } = useToast();

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = () => {
    // In a real app, this would fetch from a backend
    // For now, we'll use localStorage
    const stored = localStorage.getItem('springs_alerts');
    if (stored) {
      setAlerts(JSON.parse(stored));
    } else {
      setAlerts(ACTIVE_ALERTS);
      localStorage.setItem('springs_alerts', JSON.stringify(ACTIVE_ALERTS));
    }
  };

  const saveAlerts = (updatedAlerts: AlertConfig[]) => {
    localStorage.setItem('springs_alerts', JSON.stringify(updatedAlerts));
    setAlerts(updatedAlerts);
  };

  const handleInputChange = (field: keyof AlertFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePageToggle = (page: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      showOnPages: checked 
        ? [...prev.showOnPages, page]
        : prev.showOnPages.filter(p => p !== page)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const alertData: AlertConfig = {
      id: editingId || `alert-${Date.now()}`,
      type: formData.type,
      title: formData.title,
      message: formData.message,
      ctaText: formData.ctaText || undefined,
      ctaLink: formData.ctaLink || undefined,
      startDate: formData.startDate || undefined,
      endDate: formData.endDate || undefined,
      isActive: formData.isActive,
      priority: formData.priority,
      showOnPages: formData.showOnPages,
      styling: {
        backgroundColor: formData.backgroundColor,
        textColor: formData.textColor,
        borderColor: formData.borderColor,
        buttonStyle: 'default',
        buttonColors: {
          background: 'bg-white',
          text: 'text-black',
          border: 'border-white',
          hover: {
            background: 'bg-gray-100',
            text: 'text-black'
          }
        }
      }
    };

    let updatedAlerts: AlertConfig[];
    if (editingId) {
      updatedAlerts = alerts.map(a => a.id === editingId ? alertData : a);
      toast({
        title: 'Alert Updated',
        description: 'The alert has been updated successfully.',
      });
    } else {
      updatedAlerts = [...alerts, alertData];
      toast({
        title: 'Alert Created',
        description: 'A new alert has been created.',
      });
    }

    saveAlerts(updatedAlerts);
    resetForm();
  };

  const handleEdit = (alert: AlertConfig) => {
    setFormData({
      id: alert.id,
      type: alert.type,
      title: alert.title,
      message: alert.message,
      ctaText: alert.ctaText || '',
      ctaLink: alert.ctaLink || '',
      startDate: alert.startDate || '',
      endDate: alert.endDate || '',
      isActive: alert.isActive,
      priority: alert.priority,
      showOnPages: alert.showOnPages,
      backgroundColor: alert.styling.backgroundColor,
      textColor: alert.styling.textColor,
      borderColor: alert.styling.borderColor || '',
    });
    setEditingId(alert.id);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this alert?')) {
      const updatedAlerts = alerts.filter(a => a.id !== id);
      saveAlerts(updatedAlerts);
      toast({
        title: 'Alert Deleted',
        description: 'The alert has been removed.',
      });
    }
  };

  const handleToggleActive = (id: string) => {
    const updatedAlerts = alerts.map(a => 
      a.id === id ? { ...a, isActive: !a.isActive } : a
    );
    saveAlerts(updatedAlerts);
    toast({
      title: 'Status Updated',
      description: 'The alert status has been changed.',
    });
  };

  const resetForm = () => {
    setFormData({
      id: '',
      type: 'announcement',
      title: '',
      message: '',
      ctaText: '',
      ctaLink: '',
      startDate: '',
      endDate: '',
      isActive: true,
      priority: 'medium',
      showOnPages: [],
      backgroundColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      borderColor: 'border-blue-200',
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
                {isEditing ? 'Edit' : 'Create'} Alert Message
              </CardTitle>
              <CardDescription className="font-avenir">
                Alert messages appear as sections within specific pages
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
                  placeholder="e.g., Winter Hours Update"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="font-avenir font-medium">Type</Label>
                <Select value={formData.type} onValueChange={(value: any) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="closure">Closure</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="promotion">Promotion</SelectItem>
                    <SelectItem value="weather">Weather Alert</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-avenir font-medium">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                className="font-avenir min-h-[120px]"
                placeholder="Enter the full alert message..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ctaText" className="font-avenir font-medium">Button Text (Optional)</Label>
                <Input
                  id="ctaText"
                  value={formData.ctaText}
                  onChange={(e) => handleInputChange('ctaText', e.target.value)}
                  className="font-avenir"
                  placeholder="e.g., View Details"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ctaLink" className="font-avenir font-medium">Button Link (Optional)</Label>
                <Input
                  id="ctaLink"
                  value={formData.ctaLink}
                  onChange={(e) => handleInputChange('ctaLink', e.target.value)}
                  className="font-avenir"
                  placeholder="e.g., /experiences"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-avenir font-medium">Show on Pages *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-slate-200 rounded-lg">
                {AVAILABLE_PAGES.map(page => (
                  <div key={page} className="flex items-center space-x-2">
                    <Checkbox
                      id={`page-${page}`}
                      checked={formData.showOnPages.includes(page)}
                      onCheckedChange={(checked) => handlePageToggle(page, checked as boolean)}
                    />
                    <label
                      htmlFor={`page-${page}`}
                      className="text-sm font-avenir capitalize cursor-pointer"
                    >
                      {page}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="priority" className="font-avenir font-medium">Priority</Label>
                <Select value={formData.priority} onValueChange={(value: any) => handleInputChange('priority', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate" className="font-avenir font-medium">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="font-avenir"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate" className="font-avenir font-medium">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="font-avenir"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="backgroundColor" className="font-avenir font-medium">Background Color</Label>
                <Select value={formData.backgroundColor} onValueChange={(value) => handleInputChange('backgroundColor', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bg-blue-50">Blue Light</SelectItem>
                    <SelectItem value="bg-green-50">Green Light</SelectItem>
                    <SelectItem value="bg-amber-50">Amber Light</SelectItem>
                    <SelectItem value="bg-red-50">Red Light</SelectItem>
                    <SelectItem value="bg-slate-900">Dark</SelectItem>
                    <SelectItem value="bg-black">Black</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="textColor" className="font-avenir font-medium">Text Color</Label>
                <Select value={formData.textColor} onValueChange={(value) => handleInputChange('textColor', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-blue-900">Blue Dark</SelectItem>
                    <SelectItem value="text-green-900">Green Dark</SelectItem>
                    <SelectItem value="text-amber-900">Amber Dark</SelectItem>
                    <SelectItem value="text-red-900">Red Dark</SelectItem>
                    <SelectItem value="text-white">White</SelectItem>
                    <SelectItem value="text-slate-900">Slate Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="borderColor" className="font-avenir font-medium">Border Color</Label>
                <Select value={formData.borderColor} onValueChange={(value) => handleInputChange('borderColor', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="border-blue-200">Blue</SelectItem>
                    <SelectItem value="border-green-200">Green</SelectItem>
                    <SelectItem value="border-amber-200">Amber</SelectItem>
                    <SelectItem value="border-red-200">Red</SelectItem>
                    <SelectItem value="border-white/20">White</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => handleInputChange('isActive', checked)}
              />
              <Label htmlFor="isActive" className="font-avenir font-medium cursor-pointer">
                Active
              </Label>
            </div>

            <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 font-avenir text-base py-6">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? 'Update' : 'Create'} Alert
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="font-canela text-2xl text-slate-900">
            All Alert Messages
          </CardTitle>
          <CardDescription className="font-avenir">
            {alerts.length} total alert{alerts.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {alerts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 font-avenir text-lg mb-4">No alerts yet</p>
              <p className="text-slate-400 font-avenir text-sm">Create your first alert above</p>
            </div>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-canela text-xl text-slate-900">{alert.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-avenir font-medium ${
                          alert.isActive ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {alert.isActive ? 'Active' : 'Inactive'}
                        </span>
                        <span className="px-2 py-1 rounded text-xs font-avenir font-medium bg-blue-100 text-blue-800 capitalize">
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-slate-600 font-avenir text-sm mb-2 line-clamp-2">{alert.message}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-avenir flex-wrap">
                        <span className="capitalize">Type: {alert.type}</span>
                        <span>Pages: {alert.showOnPages.join(', ')}</span>
                        {alert.startDate && <span>Start: {new Date(alert.startDate).toLocaleDateString()}</span>}
                        {alert.endDate && <span>End: {new Date(alert.endDate).toLocaleDateString()}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleActive(alert.id)}
                      >
                        {alert.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(alert)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(alert.id)}
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

export default AlertManager;

