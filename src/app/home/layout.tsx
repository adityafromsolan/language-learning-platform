'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Icons
import { 
  Home, 
  BookOpen, 
  Video, 
  Users, 
  Globe, 
  Settings, 
  Menu, 
  X,
  User
} from 'lucide-react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle loading state
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'My Languages', href: '/home/languages', icon: BookOpen },
    { name: 'AI Practice', href: '/home/practice', icon: Video },
    { name: 'Find Partners', href: '/home/partners', icon: Users },
    { name: 'Settings', href: '/home/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header with menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-40 w-full bg-white shadow-sm p-4 flex items-center justify-between">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="text-gray-500 focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="text-lg font-semibold">LinguaLearn</div>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <User size={18} className="text-blue-600" />
        </div>
      </div>

      {/* Sidebar for navigation */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <span className="text-xl font-bold text-blue-600">LinguaLearn</span>
        </div>

        {/* User info */}
        <div className="px-4 py-5 border-b">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <User size={20} className="text-blue-600" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {session?.user?.email || 'user@example.com'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-600"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-500" />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className={`lg:pl-64 pt-16 lg:pt-0`}>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
} 