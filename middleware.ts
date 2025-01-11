
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // List of supported locales
  locales: [
    "en-kh", "km-kh", "zh-kh"
  ],
  defaultLocale: "en", // Default locale
});

export const config = {
  // Ensure middleware only applies to localized routes
  matcher: [
    "/",
    "/((?!api|_next|favicon.ico).*)", // Exclude API routes, assets, and favicon
    "/(en-kh|km-kh|zh-kh)/:path*", // Include localized paths
  ],
};




