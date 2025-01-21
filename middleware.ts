
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // List of supported locales
  locales: [
    "en-kh", "km-kh", "zh-kh", "th-th", "en-th", "en-id", "id-id", "en-my", "ms-my", "zh-my",
  ],
  defaultLocale: "en", // Default locale
  
});

export const config = {
  // Ensure middleware only applies to localized routes
  matcher: [
    "/",
    "/((?!api|_next|favicon.ico).*)", // Exclude API routes, assets, and favicon
    "/(en-kh|km-kh|zh-kh|th-th|en-th|en-id|id-id|en-my|ms-my|zh-my)/:path*", // Include localized paths
  ],
};






