import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value ?? "";
    const session: string = request.cookies.get("session")?.value ?? "";
    const userRegistered = request.cookies.get("userRegistered")?.value;

    if (!token && session !== "true") {
      if (userRegistered) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else { // existen token y session
      return getAuthenticationHeaders(request, token, session);

    }
  } catch (error) {
    throw new Error("Could not get user account");
  }
}

const getAuthenticationHeaders = (request: NextRequest, accessToken: string, session: string) => {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-digital-access-token', accessToken)
  requestHeaders.set('x-digital-session', session)
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
export const config = {
  matcher: [
    "/dashboard",
    "/register/success",
    "/profile",
    "/cards",
    "/cards/new-card",
    "/charge",
    "/charge/with-card",
    "/activity",
    "/activity/:id*",
    "/pay",
    "/pay/:id*"
  ]
}

