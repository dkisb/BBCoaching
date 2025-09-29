import { NextResponse, type NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing, type AppLocale } from './src/i18n/routing'

const intlMiddleware = createMiddleware(routing)
const isLocale = (value: string | undefined): value is AppLocale =>
  routing.locales.includes(value as AppLocale)

export default function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split('/').filter(Boolean)

  if (segments.length > 1) {
    const [first, second] = segments

    if (isLocale(first) && first === second) {
      const normalizedSegments = [first, ...segments.slice(2)]
      const normalizedPath = `/${normalizedSegments.join('/')}`

      if (request.nextUrl.pathname !== normalizedPath) {
        const redirectUrl = new URL(request.url)
        redirectUrl.pathname = normalizedPath
        return NextResponse.redirect(redirectUrl, 308)
      }
    }
  }

  return intlMiddleware(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hu|en)(.*)']
}
