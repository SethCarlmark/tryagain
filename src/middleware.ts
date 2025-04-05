import { SpeedInsights } from '@vercel/speed-insights';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Initialize Speed Insights
  SpeedInsights();
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
}; 