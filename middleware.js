import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["bn", "en"];
let defaultLocale = "en";

function getLocale(request) {
  // Extract "accept-language" from request headers
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

  // Create a headers object for Negotiator
  let headers = { "accept-language": acceptedLanguage };

  // Determine the preferred language from the request headers
  let languages = new Negotiator({ headers }).language();

  // Match the preferred language with available locales or use the default locale
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  // Get the current pathname from the request URL
  const pathName = request.nextUrl.pathname;

  // Check if the pathname is missing a locale prefix
  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  );

  // If no locale is present in the URL, determine the best locale and redirect
  if (pathNameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
