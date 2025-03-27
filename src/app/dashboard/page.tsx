'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading user data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4">Your Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Lessons Completed</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Streak</p>
            <p className="text-2xl font-bold">7 days</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">XP Points</p>
            <p className="text-2xl font-bold">1,240</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-600 h-3"></div>
            <div className="p-4">
              <h4 className="font-medium mb-1">Spanish Basics</h4>
              <p className="text-sm text-gray-500 mb-2">4/10 lessons completed</p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full w-2/5"></div>
              </div>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Continue
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-green-600 h-3"></div>
            <div className="p-4">
              <h4 className="font-medium mb-1">Mandarin Phrases</h4>
              <p className="text-sm text-gray-500 mb-2">2/8 lessons completed</p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full w-1/4"></div>
              </div>
              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                Continue
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-600 h-3"></div>
            <div className="p-4">
              <h4 className="font-medium mb-1">English Conversation</h4>
              <p className="text-sm text-gray-500 mb-2">6/12 lessons completed</p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full w-1/2"></div>
              </div>
              <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 