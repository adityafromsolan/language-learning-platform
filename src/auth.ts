import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    }
  }
}

// This would be replaced with your database logic
const mockUsers = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: '$2b$10$mSgAKFGY1h6GqY3RKCRrDeaGtpoR4S4ao3mwUH/pmQp2GVcK5CwSi', // 'password123'
  },
];

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        // Find user by email - in production this would be a database query
        const user = mockUsers.find(user => user.email === credentials.email);
        
        if (!user) {
          return null;
        }
        
        // Check if passwords match
        const passwordMatch = await compare(credentials.password, user.password);
        
        if (!passwordMatch) {
          return null;
        }
        
        // Return user without the password
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig); 