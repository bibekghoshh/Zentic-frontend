"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">ShiftFlow</h1>

        <div className="flex gap-6 items-center">
          <Link href="/login">Login</Link>
          <Link
            href="/register"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}