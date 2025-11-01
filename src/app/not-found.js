import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found - GlassyBlog",
  description: "Oops! This page does not exist. Return to homepage to view blogs.",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="mt-16 mb-16 flex flex-col gap-7 justify-center items-center">
        <Image
          src={
            "/404-icon.png"
          }
          height={200}
          width={200}
          alt="not found image"
        />
        <h1 className="text-gray-200 text-xl font-semibold text-center">
          Sorry this page is not found
        </h1>
        <Link href="/">
          <div className="group relative w-fit mx-auto">
            <button 
             className="flex gap-3 items-center px-4 py-2 font-semibold backdrop-blur-sm border bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 border-emerald-500/50 hover:border-emerald-500 text-white mx-auto text-center rounded-full transition-all duration-300 cursor-pointer"
             aria-label="Go to homepage"
            >
               View Blogs
              <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
            </button>
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}
