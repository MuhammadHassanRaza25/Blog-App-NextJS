import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }) {
  let {
    _id: id,
    image,
    title,
    description,
    author,
    authorAvatar,
    createdAt,
  } = data;

  return (
    <>
      <Link href={`/blog/${id}`}>
        <div
          key={id}
          className="w-80 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl duration-300 cursor-pointer group flex flex-col justify-between"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-t-2xl">
            <Image
              src={
                image ||
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              }
              width={800}
              height={192}
              alt="Blog Image"
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow justify-between">
            {/* Title */}
            <h2 className="text-white text-xl font-semibold mb-2 hover:text-emerald-400 transition-colors duration-300">
              {title || "Untitled Blog"}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
              {(
                description || "No description provided for this blog post."
              ).slice(0, 110)}
            </p>

            {/* Footer Section */}
            <div className="flex items-end justify-between mt-auto">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={
                    authorAvatar ||
                    "https://randomuser.me/api/portraits/men/75.jpg"
                  }
                  alt={author || "Author"}
                  className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover shrink-0"
                />
                <div className="overflow-hidden">
                  <p className="text-white font-medium text-sm truncate">
                    {author || "Unknown Author"}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {createdAt
                      ? new Date(createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Oct 10, 2025"}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <Link href={`/blog/${id}`}>
                <button className="flex gap-3 items-center px-4 py-1.5 text-xs font-semibold backdrop-blur-sm border bg-emerald-700/30 focus:outline-none focus:bg-emerald-700/40 hover:bg-emerald-700/40 border-emerald-500/50 hover:border-emerald-500 text-white rounded-full transition-all duration-300 cursor-pointer">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
