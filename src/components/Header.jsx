"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                GlassyBlog
              </h1>
            </Link>

            {/* Desktop Links*/}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "text-emerald-400 font-bold"
                    : "text-gray-200 hover:text-emerald-400"
                }`}
              >
                Home
                {isActive("/") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-800 rounded-full" />
                )}
              </Link>

              <Link
                href="/blogs/create"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive("/blogs/create")
                    ? "text-emerald-400 font-bold"
                    : "text-gray-200 hover:text-emerald-400"
                }`}
              >
                Create Blog
                {isActive("/blogs/create") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-800 rounded-full" />
                )}
              </Link>

              <Link
                href="/blogs/my-blogs"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive("/blogs/my-blogs")
                    ? "text-emerald-400 font-bold"
                    : "text-gray-200 hover:text-emerald-400"
                }`}
              >
                My Blogs
                {isActive("/blogs/my-blogs") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-800 rounded-full" />
                )}
              </Link>
            </nav>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link href="/login">
                <div className="group relative w-fit mx-auto">
                  <button className="relative flex items-center px-6 py-2 text-sm font-medium text-white bg-emerald-700/30 border border-emerald-500/50 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-emerald-700/40 hover:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer">
                    Login
                    {/* Underline animation */}
                    <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
                  </button>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-200 hover:text-emerald-400 focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive("/")
                    ? "text-emerald-400 font-bold bg-white/10"
                    : "text-gray-200 hover:text-emerald-400 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/blogs/create"
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive("/blogs/create")
                    ? "text-emerald-400 font-bold bg-white/10"
                    : "text-gray-200 hover:text-emerald-400 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Create Blog
              </Link>

              <Link
                href="/blogs/my-blogs"
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive("/blogs/my-blogs")
                    ? "text-emerald-400 font-bold bg-white/10"
                    : "text-gray-200 hover:text-emerald-400 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                My Blogs
              </Link>

              <div className="px-3 py-2">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative block w-full text-center text-sm font-medium text-white bg-emerald-700/30 backdrop-blur-md border border-emerald-500/50 rounded-full px-4 py-2 transition-all duration-300 hover:bg-emerald-700/40 hover:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Login
                  {/* Underline on hover */}
                  <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
