import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import BlogCard from "./components/BlogCard";

export default async function Home() {
  let res = await fetch("http://localhost:3000/api/blogs");
  res = await res.json();

  return (
    <>
      <Header />
      <Hero />

      {/* Blog Posts Section */}
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-md pt-18">
        <h1 className="font-semibold text-center lg:text-4xl md:text-2xl text-xl text-white pb-4">
          Insights & Stories
        </h1>

        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="mt-10 mb-18 flex flex-wrap gap-5 justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {res.data?.map((blogs) => (
          <BlogCard key={blogs._id} data={blogs} />
        ))}
      </div>

      <Footer />
    </>
  );
}
