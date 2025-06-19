import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES, STORAGE_KEYS } from './core/config/constants';

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get(STORAGE_KEYS.ACCESS_TOKEN);
    if (cookie) {
        try {
            if (request.nextUrl.pathname === ROUTES.PUBLIC.LOGIN || request.nextUrl.pathname === ROUTES.PUBLIC.REGISTER || request.nextUrl.pathname === ROUTES.PUBLIC.FORGOT_PASSWORD || request.nextUrl.pathname === ROUTES.PUBLIC.RESET_PASSWORD) {
                // Redirect to console page if the user is already logged in
                return NextResponse.redirect(new URL(ROUTES.PRIVATE.DASHBOARD, request.url));
            }
        } catch (error) {
            console.log("❌ Error parsing cookie:", error);
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.LOGIN, request.url));
        }
    } else {
        if (request.nextUrl.pathname === ROUTES.PUBLIC.LOGIN || request.nextUrl.pathname === ROUTES.PUBLIC.REGISTER || request.nextUrl.pathname === ROUTES.PUBLIC.FORGOT_PASSWORD || request.nextUrl.pathname === ROUTES.PUBLIC.RESET_PASSWORD) {
            // allow login and register pages
            return NextResponse.next();
        } else {
            // redirect all other pages to login page
            return NextResponse.redirect(new URL(ROUTES.PUBLIC.LOGIN, request.url));
        }
    }
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/auth/:path*",
    ],
};