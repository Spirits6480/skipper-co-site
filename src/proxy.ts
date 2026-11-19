import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { wordpressPostIds } from "@/config/routes";

/**
 * WordPress `?p=` shortlinks are also declared in next.config.ts.
 * Those redirects keep the query string. This proxy drops `p` once the
 * visitor is on the canonical path, so the address bar matches the live slug.
 */
export function proxy(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("p");
  if (!id || !(id in wordpressPostIds)) {
    return NextResponse.next();
  }

  const destination = wordpressPostIds[id];
  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.searchParams.delete("p");
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
