import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthPage = request.nextUrl.pathname.startsWith('/(auth)') || 
                    request.nextUrl.pathname === '/login' || 
                    request.nextUrl.pathname === '/register';

  // Redirect root to /home if authenticated
  if (request.nextUrl.pathname === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.redirect(new URL('/(auth)/login', request.url));
  }

  // Protect /home routes
  if (request.nextUrl.pathname.startsWith('/home')) {
    if (!token) {
      return NextResponse.redirect(new URL('/(auth)/login', request.url));
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

// See https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 