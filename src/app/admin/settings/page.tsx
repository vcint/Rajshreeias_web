"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface SiteSettings {
  siteName: string;
  tagline: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  whatsapp: {
    number: string;
    message: string;
  };
  stats: {
    coursesOffered: string;
    expertFaculty: string;
    studyMaterials: string;
    successRate: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  enrollmentForm: {
    counselingNote: string;
    callbackTime: string;
  };
}

const defaultSettings: SiteSettings = {
  siteName: '',
  tagline: '',
  contact: {
    phone: '',
    email: '',
    address: ''
  },
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    linkedin: ''
  },
  whatsapp: {
    number: '',
    message: ''
  },
  stats: {
    coursesOffered: '',
    expertFaculty: '',
    studyMaterials: '',
    successRate: ''
  },
  hero: {
    title: '',
    subtitle: '',
    primaryCTA: '',
    secondaryCTA: ''
  },
  enrollmentForm: {
    counselingNote: '',
    callbackTime: ''
  }
};

function normalizeSettings(data: any): SiteSettings {
  return {
    ...defaultSettings,
    ...data,
    contact: { ...defaultSettings.contact, ...(data?.contact || {}) },
    social: { ...defaultSettings.social, ...(data?.social || {}) },
    whatsapp: { ...defaultSettings.whatsapp, ...(data?.whatsapp || {}) },
    stats: { ...defaultSettings.stats, ...(data?.stats || {}) },
    hero: { ...defaultSettings.hero, ...(data?.hero || {}) },
    enrollmentForm: { ...defaultSettings.enrollmentForm, ...(data?.enrollmentForm || {}) }
  };
}

export default function SettingsEditor() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/get-content?file=site-settings.json');
      const result = await response.json();
      
      if (result.success) {
        setSettings(normalizeSettings(result.data));
      } else {
        console.error('Failed to fetch settings:', result.error);
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    if (!settings) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          file: 'site-settings.json', 
          data: settings 
        })
      });

      if (response.ok) {
        alert('Settings updated successfully!');
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      alert('Failed to save settings. Please try again.');
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateSettings = (path: string, value: string) => {
    if (!settings) return;
    
    const pathArray = path.split('.');
    const newSettings = { ...settings };
    let current: any = newSettings;
    
    for (let i = 0; i < pathArray.length - 1; i++) {
      if (typeof current[pathArray[i]] !== 'object' || current[pathArray[i]] === null) {
        current[pathArray[i]] = {};
      }
      current = current[pathArray[i]];
    }
    current[pathArray[pathArray.length - 1]] = value;
    
    setSettings(newSettings);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-[#2D1B33]">Loading settings...</div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-red-600">Failed to load settings</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 text-[#2D1B33]/60 hover:text-[#D9A15B] mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2D1B33] mb-2">
                Site Settings
              </h1>
              <p className="text-[#2D1B33]/70 text-lg">
                Update contact information and social links
              </p>
            </div>
            <button
              onClick={saveSettings}
              disabled={isSaving}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Site Name</label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => updateSettings('siteName', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Tagline</label>
                <input
                  type="text"
                  value={settings.tagline}
                  onChange={(e) => updateSettings('tagline', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Phone Number</label>
                <input
                  type="text"
                  value={settings.contact.phone}
                  onChange={(e) => updateSettings('contact.phone', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Email Address</label>
                <input
                  type="email"
                  value={settings.contact.email}
                  onChange={(e) => updateSettings('contact.email', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Address</label>
                <textarea
                  value={settings.contact.address}
                  onChange={(e) => updateSettings('contact.address', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-24"
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Social Media Links</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Facebook URL</label>
                <input
                  type="url"
                  value={settings.social.facebook}
                  onChange={(e) => updateSettings('social.facebook', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Instagram URL</label>
                <input
                  type="url"
                  value={settings.social.instagram}
                  onChange={(e) => updateSettings('social.instagram', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Twitter URL</label>
                <input
                  type="url"
                  value={settings.social.twitter}
                  onChange={(e) => updateSettings('social.twitter', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">YouTube URL</label>
                <input
                  type="url"
                  value={settings.social.youtube}
                  onChange={(e) => updateSettings('social.youtube', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="https://youtube.com/@yourchannel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  value={settings.social.linkedin}
                  onChange={(e) => updateSettings('social.linkedin', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">WhatsApp Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">WhatsApp Number</label>
                <input
                  type="text"
                  value={settings.whatsapp.number}
                  onChange={(e) => updateSettings('whatsapp.number', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="+918668275251"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Default WhatsApp Message</label>
                <textarea
                  value={settings.whatsapp.message}
                  onChange={(e) => updateSettings('whatsapp.message', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-24"
                />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Website Statistics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Courses Offered</label>
                <input
                  type="text"
                  value={settings.stats.coursesOffered}
                  onChange={(e) => updateSettings('stats.coursesOffered', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="8+"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Expert Faculty</label>
                <input
                  type="text"
                  value={settings.stats.expertFaculty}
                  onChange={(e) => updateSettings('stats.expertFaculty', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="10+"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Study Materials</label>
                <input
                  type="text"
                  value={settings.stats.studyMaterials}
                  onChange={(e) => updateSettings('stats.studyMaterials', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="Comprehensive"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Success Rate</label>
                <input
                  type="text"
                  value={settings.stats.successRate}
                  onChange={(e) => updateSettings('stats.successRate', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  placeholder="95%"
                />
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Homepage Hero Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Hero Title</label>
                <textarea
                  value={settings.hero.title}
                  onChange={(e) => updateSettings('hero.title', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Hero Subtitle</label>
                <textarea
                  value={settings.hero.subtitle}
                  onChange={(e) => updateSettings('hero.subtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-28"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Primary CTA Text</label>
                  <input
                    type="text"
                    value={settings.hero.primaryCTA}
                    onChange={(e) => updateSettings('hero.primaryCTA', e.target.value)}
                    className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Secondary CTA Text</label>
                  <input
                    type="text"
                    value={settings.hero.secondaryCTA}
                    onChange={(e) => updateSettings('hero.secondaryCTA', e.target.value)}
                    className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enrollment Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2D1B33]/10">
            <h2 className="text-xl font-semibold text-[#2D1B33] mb-4">Enrollment Form Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Counseling Note</label>
                <textarea
                  value={settings.enrollmentForm.counselingNote}
                  onChange={(e) => updateSettings('enrollmentForm.counselingNote', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B] h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2D1B33]/80 mb-2">Callback Time Text</label>
                <input
                  type="text"
                  value={settings.enrollmentForm.callbackTime}
                  onChange={(e) => updateSettings('enrollmentForm.callbackTime', e.target.value)}
                  className="w-full px-3 py-2 border border-[#2D1B33]/20 rounded-lg focus:outline-none focus:border-[#D9A15B]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}