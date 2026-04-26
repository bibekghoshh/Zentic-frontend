"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="font-bold text-xl tracking-tight">
          ShiftFlow
        </h1>

        <div className="flex gap-6 items-center text-sm">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>

          <Link href="/login" className="hover:text-blue-600 transition">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}