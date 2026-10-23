import type { ReactNode } from "react";

// Next.js 16.4+ requires a root layout above app/page.tsx; the real <html> shell lives in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
