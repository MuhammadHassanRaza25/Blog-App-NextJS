import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import BlogCard from "./components/BlogCard";
import { MotionUp } from "@/components/ui/motion-up";

export default async function Home() {
  let res = await fetch("http://localhost:3000/api/blogs");
  res = await res.json();

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
        {res.data?.map((blogs, index) => (
          <MotionUp key={blogs._id} delay={index * 0.1}>
            <BlogCard data={blogs} />
          </MotionUp>
        ))}
      </div>

      <Footer />
    </>
  );
}
