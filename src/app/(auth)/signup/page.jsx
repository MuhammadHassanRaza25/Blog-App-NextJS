"use client";

import { signupUser } from "@/app/actions/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const signupRef = useRef(null);
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewAvatar(URL.createObjectURL(file));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData(signupRef.current);

    // Upload avatar if selected
    let imageFile = data.get("profilepic");
    let avatar = null;

    try {
      if (imageFile && imageFile.size > 0) {
        const imgForm = new FormData();
        imgForm.append("file", imageFile);

        const uploadRes = await fetch("/api/upload-avatar", {
          method: "POST",
          body: imgForm,
        });

        const uploadData = await uploadRes.json();
        if (!uploadRes.ok) toast.error("Avatar upload failed");

        avatar = { url: uploadData.url, public_id: uploadData.public_id };
      }

      let userDetails = {
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
      };
      if (avatar) userDetails.avatar = avatar;

      const result = await signupUser(userDetails);
      if (!result.ok) {
        const msg = result.msg;
        if (msg.includes("username")) {
          toast.error("Username must be at least 3 characters");
        } else if (msg.includes("password")) {
          toast.error(
            "Password must be at least 5-30 characters, letters, numbers and special characters"
          );
        } else if (msg.includes("exist")) {
          toast.error("User exist with this email");
        } else if (msg.includes("email")) {
          toast.error("Please enter a valid email");
        } else {
          toast.error(msg);
        }
        setIsLoading(false);
        return;
      }

      toast.success("Signed up successfully");
      setIsLoading(false);
      // console.log("FORM DATA ====>", userDetails);
      signupRef.current?.reset();
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

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
                onChange={handleAvatarChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white file:text-white file:bg-transparent file:border-0 file:p-0 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
              />
              {previewAvatar && (
                <div className="mt-3">
                  <Image
                    src={previewAvatar}
                    alt="Avatar Preview"
                    width={50}
                    height={50}
                    className="w-10 h-10 rounded-full object-cover border border-white/30"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
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
