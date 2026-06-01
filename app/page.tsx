import { redirect } from "next/navigation";

// The middleware redirects all root requests to the default locale (/nl).
// This page acts as a fallback in case middleware is bypassed.
export default function RootPage() {
  redirect("/nl");
}
