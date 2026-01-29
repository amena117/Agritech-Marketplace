// src/components/Navbar.tsx
"use client"; // Needed because we'll use client-side features like links/hover later

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // This comes from shadcn init – the cn helper for classNames

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
            OA
          </div>
          <span className="font-bold text-xl text-green-800 hidden sm:inline-block">
            Thunder Agri
          </span>
        </Link>

        {/* Main Navigation Links – centered or right on larger screens */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/listings"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
          >
            Marketplace
          </Link>
          <Link
            href="/sell" // We'll create this page later – for now it can 404
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
          >
            Sell Produce
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right side: Auth / Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/(auth)/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Link href="/(auth)/register">Sign Up</Link>
          </Button>

          {/* Mobile menu button – we'll add full mobile menu later if needed */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}