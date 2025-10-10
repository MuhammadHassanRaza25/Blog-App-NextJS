"use client"

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
      <header className="bg-white border-b border-gray-300 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="fontsemi-bold text-2xl">Blog App</h1>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "text-purple-700 font-bold"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Home
                {isActive("/") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-800 rounded-full"></div>
                )}
              </Link>
              <Link
                href="/blogs/create"
                className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${
                  isActive("/blogs/create")
                    ? "text-purple-700 font-bold"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Create Blog
                {isActive("/blogs/create") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-800 rounded-full"></div>
                )}
              </Link>
              <Link
                href="/blogs/my-blogs"
                className={`relative px-3 py-2 text-sm font-heading font-medium transition-all duration-300 ${
                  isActive("/blogs/my-blogs")
                    ? "text-purple-700 font-bold"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                My Blogs
                {isActive("/blogs/my-blogs") && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-800 rounded-full"></div>
                )}
              </Link>
            </nav>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-700 focus:outline-none cursor-pointer"
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

          {/* Mobile Links */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                  href="/"
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive("/")
                      ? "text-purple-700 font-bold bg-purple-50 rounded-lg"
                      : "text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-lg"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/blogs/create"
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive("/blogs/create")
                      ? "text-purple-700 font-bold bg-purple-50 rounded-lg"
                      : "text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-lg"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Blog
                </Link>
                <Link
                  href="/blogs/my-blogs"
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive("/blogs/my-blogs")
                      ? "text-purple-700 font-bold bg-purple-50 rounded-lg"
                      : "text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-lg"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Blogs
                </Link>
                <div className="px-3 py-2">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-purple-400 to-purple-800 text-white px-4 py-2 rounded-full transition-all duration-300 font-medium text-center text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
