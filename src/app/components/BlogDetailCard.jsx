import Link from "next/link";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";

export default function BlogDetailCard({ blog }) {
  const {
    _id: id,
    image,
    title,
    description,
    author = "Unknown Author",
    authorAvatar,
    createdAt,
  } = blog || {};

  const dateStr = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div className="max-w-6xl lg:h-[450px] h-auto mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl mt-12 mb-12 text-white flex flex-col md:flex-row">
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full h-56 md:h-auto">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
          }
          alt={title || "Blog Cover"}
          className="w-full h-full"
        />
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-between">
        {/* Back Link + ID */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
          >
            <FaArrowLeft /> Back to Blogs
          </Link>
          <span className="bg-emerald-800/30 text-emerald-300 text-sm px-3 py-1 rounded-full">
            <FaBookReader className="text-emerald-500"/>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          {title || "Untitled Blog"}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={
              authorAvatar || "https://randomuser.me/api/portraits/men/75.jpg"
            }
            alt={author}
            className="w-10 h-10 rounded-full border-2 border-emerald-500 object-cover"
          />
          <div>
            <p className="text-sm font-medium">{author}</p>
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
              <p>
                This is a placeholder blog description. Replace this with actual
                text from your CMS or database.
              </p>
              <p className="mt-3">
                Lor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. em ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.
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
