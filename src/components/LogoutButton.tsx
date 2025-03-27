'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-gray-700 hover:text-gray-800"
    >
      Logout
    </button>
  );
} 