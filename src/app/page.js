import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default async function Home() {
  let res = await fetch("http://localhost:3000/api/blogs");
  res = await res.json();

  return (
    <>
      <Header />
      <Hero />

      <div className="flex flex-col items-center justify-center overflow-hidden rounded-md pt-18">
        <h1 className="font-semibold text-center lg:text-5xl md:text-2xl text-xl text-white pb-4">
          Insights & Stories
        </h1>

        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
          {/* Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        {res.data?.map((blogs) => (
          <div
            key={blogs._id}
            className="w-[80%] bg-green-100 text-green-800 p-3 border rounded-xl"
          >
            <h1 className="font-semibold">
              Title: <span className="font-normal">{blogs.title}</span>
            </h1>
            <p className="font-semibold">
              Desc: <span className="font-normal">{blogs.description}</span>
            </p>
            <p className="font-semibold">
              Author: <span className="font-normal">{blogs.author}</span>
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
