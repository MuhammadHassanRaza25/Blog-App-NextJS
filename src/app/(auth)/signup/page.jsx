"use client";

import { signupUser } from "@/app/actions/auth";
import ToastHandler from "@/components/ToastHandler";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Signup() {
  const signupRef = useRef(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setIsLoading(true);

    const data = new FormData(signupRef.current);
    let userDetails = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      // profilepic: data.get("profilepic")
    };
    try {
      const result = await signupUser(userDetails);
      if (!result.ok) {
        setErrorMsg(result.msg);
        setIsLoading(false);
        return;
      }
      setSuccessMsg(result.msg || "Signup successful!");
      setIsLoading(false);
      // console.log("FORM DATA ====>", userDetails);
      signupRef.current?.reset();
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastHandler successMessage={successMsg} errorMessage={errorMsg} />

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
        <div className="w-96 max-w-md bg-white/10 backdrop-blur-md p-8 py-5 rounded-xl border border-white/20 shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-8 drop-shadow-md">
            Create{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Account
            </span>{" "}
          </h2>

          <form className="space-y-5" ref={signupRef} onSubmit={handleSignup}>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-300 mb-1 cursor-pointer"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="your name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-1 cursor-pointer"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Profile Picture */}
            <div>
              <label
                htmlFor="profilePic"
                className="block text-sm text-gray-300 mb-1 cursor-pointer"
              >
                Profile Picture
              </label>
              <input
                type="file"
                name="profilepic"
                id="profilePic"
                accept="image/*"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white file:text-white file:bg-transparent file:border-0 file:p-0 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center mt-2 px-6 py-2 font-medium text-white bg-emerald-700/40 border border-emerald-500 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
            >
              {loading ? <div className="formLoader"></div> : "Sign Up"}
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
