'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">LinguaLearn</h1>
          </div>
          <div className="flex items-center space-x-4">
            {session?.user && (
              <span className="text-sm text-gray-600">
                Welcome, {session.user.name}
              </span>
            )}
            <nav className="flex space-x-8">
              <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                Dashboard
              </Link>
              <Link href="/dashboard/lessons" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                Lessons
              </Link>
              <Link href="/dashboard/profile" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                Profile
              </Link>
              <LogoutButton />
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
} 