import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-xl text-indigo-600">LinguaLearn</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <a href="/lessons" className="hover:text-indigo-600">Lessons</a>
            <a href="/profile" className="hover:text-indigo-600">Profile</a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-6">
        {children}
      </main>
    </div>
  );
} 