"use client";

import { loginUser } from "@/app/actions/users";
import { AuthContext } from "@/app/context/AuthContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useRef } from "react";

export default function Login() {
  const loginRef = useRef(null);
  const { setUser } = useContext(AuthContext)

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 select-none",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="w-96 max-w-md bg-white/10 backdrop-blur-md p-8 py-8 rounded-xl border border-white/20 shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-md">
            Login to{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              GlassyBlog
            </span>
          </h2>

          <form
            ref={loginRef}
            action={async (data) => {
              let userDetails = {
                email: data.get("email"),
                password: data.get("password"),
              };
              try {
                const result = await loginUser(userDetails);
                // console.log("FORM DATA ====>", userDetails);
                if (!result.ok) {
                  // message.error("Login failed");
                  console.log("Login failed");
                  return;
                }
                // message.success("Login successful!");
                console.log("Login successful!");
                setUser(result.user);
                loginRef.current?.reset();
              } catch (err) {
                console.error("Error in login", err);
              }
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1 cursor-pointer"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div>
              <label
                htmlFor="pass"
                className="block text-sm text-gray-300 mb-1 cursor-pointer"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-6 py-2 font-medium text-white bg-emerald-700/40 border border-emerald-500 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-emerald-400 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
