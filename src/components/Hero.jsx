import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaPenNib } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Hero() {
  return (
    <>
      <div className="relative">
        {/* Grid Background Layer */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        {/* Hero Content Div */}
        <div className="flex flex-col gap-5 items-center justify-center max-w-7xl mx-auto px-4 pt-20 pb-20 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex gap-2 items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <span className="text-sm font-medium text-white drop-shadow-sm">
              Thoughts, Stories & Ideas
            </span>
            <HiOutlineLightBulb className="w-4 h-4 text-yellow-400 mr-2 drop-shadow-sm" />
          </div>

          {/* Heading and para */}
          <div className="flex flex-col items-center">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold text-white text-center">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                GlassyBlog
              </span>
            </h1>
            <p className="lg:w-[70%] md:w-[70%] w-[90%] lg:text-lg md:text-base text-sm text-center text-gray-100 mt-5">
              Every day brings a new story, a fresh perspective! Dive into our
              blogs to discover inspiring tips, heartfelt stories, and
              everything that fuels your passion to chase your dreams. Join us
              on this journey where every word is meant to touch your heart and
              spark your curiosity.
            </p>
          </div>

          {/* Button */}
          <Link href="/blogs/create">
            <button className="flex gap-3 items-center px-4 py-2 font-semibold backdrop-blur-sm border bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 border-emerald-500/50 hover:border-emerald-500 text-white mx-auto text-center rounded-full relative transition-all duration-300 cursor-pointer">
              Create Your Blog <FaPenNib />
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
