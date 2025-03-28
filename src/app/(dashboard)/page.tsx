'use client';

import { useSession } from 'next-auth/react';
import { 
  BookOpen, 
  Video, 
  Users, 
  Clock, 
  Award,
  TrendingUp
} from 'lucide-react';

export default function DashboardPage() {
  const { data: session } = useSession();
  
  // Mock data - replace with actual data later
  const stats = [
    { name: 'Learning Streak', value: '7 days', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
    { name: 'Practice Time', value: '12 hours', icon: Clock, color: 'bg-blue-100 text-blue-600' },
    { name: 'AI Sessions', value: '15', icon: Video, color: 'bg-purple-100 text-purple-600' },
    { name: 'Peer Sessions', value: '3', icon: Users, color: 'bg-yellow-100 text-yellow-600' }
  ];

  const languages = [
    { name: 'Spanish', progress: 42, level: 'Beginner' },
    { name: 'French', progress: 15, level: 'Beginner' }
  ];
  
  return (
    <div>
      {/* Welcome section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}!
        </h1>
        <p className="mt-1 text-gray-600">
          Track your language learning progress and continue where you left off.
        </p>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-md ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Languages section */}
      <h2 className="text-lg font-medium text-gray-900 mb-5">My Languages</h2>
      <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
        {languages.map((language, i) => (
          <div 
            key={language.name}
            className={`px-6 py-5 ${i !== languages.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400" />
                <span className="ml-3 text-gray-900">{language.name}</span>
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                  {language.level}
                </span>
              </div>
              <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
                Continue
              </button>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${language.progress}%` }}
                ></div>
              </div>
              <p className="mt-1 text-xs text-gray-500">{language.progress}% complete</p>
            </div>
          </div>
        ))}
        <div className="px-6 py-3 bg-gray-50">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
            + Add new language
          </button>
        </div>
      </div>
      
      {/* Quick actions */}
      <h2 className="text-lg font-medium text-gray-900 mb-5">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <button className="bg-white shadow overflow-hidden rounded-lg p-5 hover:bg-blue-50 transition">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-md bg-blue-100 text-blue-600">
              <Video className="h-6 w-6" />
            </div>
            <span className="mt-3 text-gray-900 font-medium">Practice with AI</span>
          </div>
        </button>
        
        <button className="bg-white shadow overflow-hidden rounded-lg p-5 hover:bg-blue-50 transition">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-md bg-purple-100 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
            <span className="mt-3 text-gray-900 font-medium">Find a Partner</span>
          </div>
        </button>
        
        <button className="bg-white shadow overflow-hidden rounded-lg p-5 hover:bg-blue-50 transition">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-md bg-yellow-100 text-yellow-600">
              <Award className="h-6 w-6" />
            </div>
            <span className="mt-3 text-gray-900 font-medium">View Progress</span>
          </div>
        </button>
      </div>
    </div>
  );
} 