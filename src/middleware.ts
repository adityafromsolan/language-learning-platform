import { NextResponse } from 'next/server';
import { auth } from './auth';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Define protected routes
  const isApiRoute = nextUrl.pathname.startsWith('/api');
  const isAuthRoute = nextUrl.pathname.startsWith('/api/auth');
  const isLoginPage = nextUrl.pathname.startsWith('/login');
  const isRegisterPage = nextUrl.pathname.startsWith('/register');
  const isDashboardPage = nextUrl.pathname.startsWith('/dashboard');
  
  // Allow all users to access login and register pages
  if (isLoggedIn && (isLoginPage || isRegisterPage)) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl));
  }

  // Allow access to API routes, but protect dashboard
  if (!isLoggedIn && !isAuthRoute && !isLoginPage && !isRegisterPage) {
    const callbackUrl = encodeURIComponent(nextUrl.pathname);
    return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, nextUrl));
  }
  
  return NextResponse.next();
});

// See https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}; 