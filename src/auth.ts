import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Simple mock users for development
const users = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
  }
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // For development, we'll use a hardcoded user
        if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
          return {
            id: '1',
            name: 'Test User',
            email: 'test@example.com'
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-development-secret-key',
}; 