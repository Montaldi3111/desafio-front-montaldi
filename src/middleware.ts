import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value ?? "";
    const session:string = request.cookies.get("session")?.value ?? "";
    const userRegistered = request.cookies.get("userRegistered")?.value;

    // Si se registro, puede acceder al register/success
    // NO funciona por alguna razón ???
    if (userRegistered && request.nextUrl.pathname === "/register/success") {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("userRegistered")
      return response;
    }

    if(!token && session !== "true") {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return getAuthenticationHeaders(request, token, session);
  } catch (error) {
    throw new Error("Could not get user account");
  }
}

const getAuthenticationHeaders = (request : NextRequest, accessToken : string, session : string) => {
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

