"use client";
import Link from "next/link";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function BlogDetailCard({ data, backUrl = "/" }) {
  const { _id: id, image, title, description, author, createdAt } = data;
  const pathname = usePathname();
  const showButtons = pathname.startsWith("/my-blogs");
  const dateStr = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div className="max-w-6xl lg:h-[400px] h-auto mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl mt-12 mb-12 text-white flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="relative md:w-1/2 w-full h-56 md:h-auto">
        <Image
          src={
            image ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
          }
          fill
          alt={"Blog Image"}
          className="w-full h-full"
        />
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
        {/* Back Link + ID */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href={backUrl}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
          >
            <FaArrowLeft /> Back to Blogs
          </Link>

          {/* Edit/Delete Buttons */}
          {showButtons && (
            <div className="flex gap-2">
              <Link
                href={`/blog/edit/${id}`}
                className="p-2 bg-emerald-700 hover:bg-emerald-600 text-white backdrop-blur-sm rounded-full cursor-pointer"
              >
                <FiEdit size={17} />
              </Link>
              <button className="p-2 bg-red-800 hover:bg-red-700 text-white rounded-full cursor-pointer">
                <FiTrash2 size={17} />
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          {title || "Untitled Blog"}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={"https://randomuser.me/api/portraits/men/75.jpg"}
            width={40}
            height={40}
            alt="Blog Author"
            className="w-10 h-10 rounded-full border-2 border-emerald-500 object-cover"
            unoptimized
          />
          <div>
            <p className="text-sm font-medium">
              {author.username || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-400">{dateStr}</p>
          </div>
        </div>

        {/* Blog Body */}
        <div className="text-sm text-gray-200 leading-relaxed mb-6 max-h-[200px] overflow-y-auto pr-2">
          {description ? (
            description.split("\n\n").map((para, idx) => (
              <p key={idx} className="mb-3">
                {para}
              </p>
            ))
          ) : (
            <>
              <p>Blog description.</p>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="w-24">
            <button className="w-full flex gap-1 items-center px-4 py-1.5 backdrop-blur-sm border bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 border-emerald-500/50 hover:border-emerald-500 rounded-full transition-all duration-300 cursor-pointer">
              Share <IoShareSocialSharp className="text-xl" />
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Estimated read: <span className="text-emerald-300">5–7 mins</span>
          </p>
        </div>
      </div>
    </div>
  );
}
