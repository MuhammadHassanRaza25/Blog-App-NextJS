"use client"; // Required if using Next.js 13+ app directory with client components

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-emerald-400 text-black transition-all duration-300 flex flex-col`}
      >
        {/* Logo / Title */}
        <div className="pt-5 pb-5 text-xl font-bold text-center border-b border-black">
          {isSidebarOpen ? "GlassyBlog" : "GB"}
        </div>

        {/* Links */}
        <nav className="flex flex-col mt-4 space-y-2">
          <Link
            href="/admin/blogs"
            className="px-4 py-2 hover:bg-emerald-500 transition-colors"
          >
            {isSidebarOpen ? "Blogs" : "B"}
          </Link>
          <Link
            href="/admin/users"
            className="px-4 py-2 hover:bg-emerald-500 transition-colors"
          >
            {isSidebarOpen ? "Users" : "U"}
          </Link>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mt-auto mb-4 px-2 py-1 self-center bg-black text-white rounded hover:bg-gray-800 transition"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-screen h-screen px-5 bg-gray-100">
        <h1 className="mt-3 px-10 bg-emerald-400 text-black text-2xl text-center p-3 font-semibold rounded-xl shadow-xl">
          Admin Dashboard
        </h1>
        {/* Your page content */}
        <div className="mt-4 pl-3 flex justify-center items-center bg-amber-200">
          <p>Welcome to the Admin Dashboard!</p>
        </div>
      </div>
    </div>
  );
}
