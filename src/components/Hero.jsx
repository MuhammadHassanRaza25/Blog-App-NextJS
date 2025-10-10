import { FaPenNib } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center max-w-7xl mx-auto px-4 pt-14 pb-14 sm:px-6 lg:px-8">
        <div className="inline-flex gap-2 items-center bg-white/80 px-4 py-2 rounded-full border border-purple-300">
          <span className="text-sm font-medium text-gray-800">
            Thoughts, Stories & Ideas
          </span>
          <HiOutlineLightBulb className="w-4 h-4 text-purple-700 mr-2" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold text-black">
            Welcome to our <span className="bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">Blog Website</span>
          </h1>
          <p className="lg:w-[70%] md:w-[70%] w-[90%] lg:text-lg md:text-base text-sm text-center text-gray-800 mt-5">
            Every day brings a new story, a fresh perspective! Dive into our
            blogs to discover inspiring tips, heartfelt stories, and
            everything that fuels your passion to chase your dreams. Join us on
            this journey where every word is  meant to touch your heart
            and spark your curiosity.
          </p>
        </div>
        <button className="flex gap-3 items-center bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-2 rounded-full hover:text-purple-700 border hover:border-purple-700 hover:from-transparent hover:to-transparent transition-all duration-300 font-semibold text-md cursor-pointer">
          Create Your Blog <FaPenNib />
        </button>
      </div>
    </>
  );
}
