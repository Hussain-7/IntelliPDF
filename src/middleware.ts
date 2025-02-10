import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// @ts-ignore
export default function middleware(req) {
  return withAuth(req);
}


export const config = {
  matcher: ["/dashboard/:path*", "/auth-callback"],
};
