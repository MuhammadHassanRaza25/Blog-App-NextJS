import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Grid */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 select-none",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        {/* Form Container */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 py-5 rounded-xl border border-white/20 shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-md">
            Create{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Account
            </span>{" "}
          </h2>

          <form className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm text-gray-300 mb-1 cursor-pointer">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="your name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1 cursor-pointer">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300 mb-1 cursor-pointer">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Profile Picture */}
            <div>
              <label htmlFor="profilePic" className="block text-sm text-gray-300 mb-1 cursor-pointer">
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white file:text-white file:bg-transparent file:border-0 file:p-0 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 border border-emerald-500 bg-emerald-700/40 focus:outline-none focus:bg-emerald-400/10 hover:bg-emerald-400/10 text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
