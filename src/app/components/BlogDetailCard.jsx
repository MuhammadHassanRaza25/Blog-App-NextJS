import Link from "next/link";

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
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
          >
            ← Back to Blogs
          </Link>
          <span className="bg-emerald-800/30 text-emerald-300 text-xs px-3 py-1 rounded-full">
            #{id?.slice(0, 6)}
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
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-sm font-medium rounded-full transition">
              Save
            </button>
            <button className="px-4 py-2 border border-white/10 hover:bg-white/10 text-sm font-medium rounded-full transition">
              Share
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
