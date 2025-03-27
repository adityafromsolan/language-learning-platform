import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-600">LinguaLearn</h2>
          <p className="mt-2 text-sm text-gray-600">Your language learning journey starts here</p>
        </div>
        {children}
      </div>
    </div>
  );
} 