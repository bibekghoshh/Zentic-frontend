"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
      }}
      className="px-3 py-1 border rounded"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}