import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { userRole } from "./constant/roles";

export async function proxy(request: NextRequest) {
  let isAuthenticated = false;
  let isAdmin = false;
  const pathname = request.nextUrl.pathname;
  const { data } = await userService.getSesstion();

  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === userRole.admin;
  }
  //   If not authenticated redirect to the login page
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  //   Admin can not go to the User dashboard
  if (pathname.startsWith("/dashboard") && isAdmin) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  //   User can not go to the admin dashboard
  if (pathname.startsWith("/admin-dashboard") && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dashboard/:path*"],
};
