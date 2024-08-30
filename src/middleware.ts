import { getCookie } from 'cookies-next'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserAccount } from './services/account/account.service';
import { cookies } from 'next/headers';
 
export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value ?? "";
    const user_id = request.cookies.get("userLogged")?.value ?? "";
    if(!token) return NextResponse.redirect(new URL('/login', request.url))
    return getAuthenticationHeaders(request, token, user_id);
  } catch (error) {
    throw new Error("Could not get user account");
  }
}

const getAuthenticationHeaders = (request : NextRequest, accessToken: string, user_id : string) => {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-digital-access-token', accessToken)
  requestHeaders.set('x-digital-access-user-id', user_id)
 
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard"]
}

 // ['/profile', '/cards', '/cards/new-card', '/dashboard', "/register/success"]
