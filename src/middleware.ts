import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For now, we'll skip any authentication checks in middleware
  // and handle auth directly in the pages/components
  return NextResponse.next();
}

// See https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/auth).*)'],
}; 