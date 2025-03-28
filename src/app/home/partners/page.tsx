'use client';

import { useState } from 'react';
import { Globe, Users } from 'lucide-react';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'native'>('all');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-semibold text-neutral-900 mb-8">
          Find Language Partners
        </h1>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`${
                activeTab === 'all'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <Users className="mr-2 h-5 w-5" />
              All Partners
            </button>
            <button
              onClick={() => setActiveTab('native')}
              className={`${
                activeTab === 'native'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <Globe className="mr-2 h-5 w-5" />
              Native Speakers
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* All Partners List */}
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Partner {partner}</h3>
                    <p className="text-sm text-neutral-600 mt-1">Learning: Spanish, English</p>
                    <p className="text-sm text-neutral-600">Native: Mandarin</p>
                    <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Native Speakers List */}
            {[1, 2, 3, 4, 5, 6].map((speaker) => (
              <div key={speaker} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Native Speaker {speaker}</h3>
                    <p className="text-sm text-neutral-600 mt-1">Native: Spanish</p>
                    <p className="text-sm text-neutral-600">Teaching Experience: 3 years</p>
                    <button className="mt-4 text-sm font-medium text-green-600 hover:text-green-700">
                      Book a Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 