'use client';

import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  const userName = session?.user?.name?.split(' ')[0] || 'there';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome section */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-neutral-900">
            Welcome! {userName}
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Lessons Completed */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-base font-normal text-neutral-900 mb-1">
              Lessons Completed
            </h3>
            <p className="text-3xl font-semibold text-neutral-900">12</p>
          </div>

          {/* Streak */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-base font-normal text-neutral-900 mb-1">
              Streak
            </h3>
            <p className="text-3xl font-semibold text-neutral-900">7 days</p>
          </div>

          {/* XP Points */}
          <div className="bg-purple-50 rounded-2xl p-6">
            <h3 className="text-base font-normal text-neutral-900 mb-1">
              XP Points
            </h3>
            <p className="text-3xl font-semibold text-neutral-900">1,240</p>
          </div>
        </div>

        {/* Continue Learning Section */}
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Continue Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spanish Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Spanish Basics
              </h3>
              <p className="text-sm text-neutral-600 mb-4">4/10 lessons completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-blue-600 h-2 rounded-full w-[40%]"></div>
              </div>
              <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium">
                Continue
              </button>
            </div>

            {/* Mandarin Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Mandarin Phrases
              </h3>
              <p className="text-sm text-neutral-600 mb-4">2/8 lessons completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-green-600 h-2 rounded-full w-[25%]"></div>
              </div>
              <button className="w-full bg-green-600 text-white rounded-xl py-3 font-medium">
                Continue
              </button>
            </div>

            {/* English Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                English Conversation
              </h3>
              <p className="text-sm text-neutral-600 mb-4">6/12 lessons completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-purple-600 h-2 rounded-full w-[50%]"></div>
              </div>
              <button className="w-full bg-purple-600 text-white rounded-xl py-3 font-medium">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 