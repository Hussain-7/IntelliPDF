import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  // Protect these pages so
  matcher: ["/dashboard/:path*", "/auth-callback"],
};

export default authMiddleware(config);
