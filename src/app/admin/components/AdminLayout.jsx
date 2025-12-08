"use client";

import { useState } from "react";
import Link from "next/link";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaUsers, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-black/30 text-black transition-all duration-300 flex flex-col`}
      >
        <div className="pt-5 pb-5 text-xl font-bold text-center border-b border-white/30">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            {isSidebarOpen ? "GlassyBlog" : "GB"}{" "}
          </h1>
        </div>

        <nav className="flex flex-col mt-10 px-3 gap-5">
          <Link
            href="/admin"
            className={`flex gap-2 items-center w-full px-4 py-2 font-semibold backdrop-blur-sm 
              ${
                pathname === "/admin"
                  ? "bg-emerald-700/40  border-l-4 border-emerald-500 text-emerald-300"
                  : "border-l-4 border-transparent text-white"
              } 
              bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 
              mx-auto text-center rounded-lg transition-all duration-300 cursor-pointer`}
          >
            <IoFileTrayStacked />
            {isSidebarOpen && "Home"}
          </Link>

          <Link
            href="/admin/blogs"
            className={`flex gap-2 items-center w-full px-4 py-2 font-semibold backdrop-blur-sm 
              ${
                pathname === "/admin/blogs"
                  ? "bg-emerald-700/40  border-l-4 border-emerald-500 text-emerald-300"
                  : "border-l-4 border-transparent text-white"
              }
              bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 
              mx-auto text-center rounded-lg transition-all duration-300 cursor-pointer`}
          >
            <IoFileTrayStacked />
            {isSidebarOpen && "Blogs"}
          </Link>

          <Link
            href="/admin/users"
            className={`flex gap-3 items-center w-full px-4 py-2 font-semibold backdrop-blur-sm 
              ${
                pathname === "/admin/users"
                  ? "bg-emerald-700/40  border-l-4 border-emerald-500 text-emerald-300"
                  : "border-l-4 border-transparent text-white"
              }
              bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 
              mx-auto text-center rounded-lg transition-all duration-300 cursor-pointer`}
          >
            <FaUsers />
            {isSidebarOpen && "Users"}
          </Link>
        </nav>

        <div className="mx-3 mt-auto mb-5">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex justify-center w-full px-4 py-2.5 font-semibold backdrop-blur-sm border bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 border-emerald-500/50 hover:border-emerald-500 text-white mx-auto text-center rounded-lg transition-all duration-300 cursor-pointer"
          >
            {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-screen h-screen px-5 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
