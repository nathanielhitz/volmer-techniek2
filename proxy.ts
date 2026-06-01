import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest): NextResponse {
  const response = intlMiddleware(request) as NextResponse;

  // Pass resolved locale to root layout via header (used for html lang attribute)
  const pathname = request.nextUrl.pathname;
  const locale =
    routing.locales.find(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    ) ?? routing.defaultLocale;

  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
