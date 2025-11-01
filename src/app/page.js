import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import BlogCard from "./components/BlogCard";
import { MotionUp } from "@/components/ui/motion-up";

export default async function Home() {
  // let res = await fetch(`${process.env.BASE_URL}/api/blogs`);
  // res = await res.json();

  let resData = [];

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blogs`);

    // Check if response is JSON
    const text = await res.text();
    try {
      resData = JSON.parse(text);
    } catch (err) {
      console.error("Failed to parse JSON:", err, text);
      resData = { data: [] };
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    resData = { data: [] };
  }

  return (
    <>
      <Header />
      <Hero />

      {/* Blog Posts Section */}
      <MotionUp delay={0}>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md pt-18">
          <h1 className="font-semibold text-center lg:text-4xl md:text-2xl text-2xl text-white pb-4">
            Insights & Stories
          </h1>

          <div className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-2xl h-10 mx-auto">
            {/* Gradients */}
            <div className="absolute left-1/2 top-0 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] blur-sm" />
            <div className="absolute left-1/2 top-0 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-1/2 top-0 w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] blur-sm" />
            <div className="absolute left-1/2 top-0 w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />

            {/* Radial mask to smooth edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </MotionUp>

      <div className="mt-10 mb-18 flex flex-wrap gap-5 justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         {resData.data && resData.data.length > 0 ? (
          resData.data.map((blog, index) => (
            <MotionUp key={blog._id} delay={index * 0.1}>
              <BlogCard data={blog} />
            </MotionUp>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-10">No blogs available.</p>
        )}
      </div>

      <Footer />
    </>
  );
}
