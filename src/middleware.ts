import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/site', '/api/uploadthing']);

// Middleware function with Clerk authentication and subdomain handling haha
export default clerkMiddleware((auth, req) => {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers.get('host') || '';
  const referrer = req.headers.get('referer') || '';

  const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;

  const customSubDomain = hostname
    .split(process.env.NEXT_PUBLIC_DOMAIN || '')
    .filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url));
  }

  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL('/agency/sign-in', req.url));
  }


  // if (url.pathname === '/agency' && referrer) {
  //   return NextResponse.redirect(new URL('/agency/sign-in', req.url));
  // }

  if (url.pathname === '/' || (url.pathname === '/site' && hostname === process.env.NEXT_PUBLIC_DOMAIN)) {
    return NextResponse.rewrite(new URL('/site', req.url));
  }

  if (url.pathname.startsWith('/agency') || url.pathname.startsWith('/subaccount')) {
    return NextResponse.rewrite(new URL(pathWithSearchParams, req.url));
  }

  if (!isPublicRoute(req)) {
    auth();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
