"use client";

import { addBlog } from "@/app/actions/blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRef } from "react";

export default function CreateBlog() {
  const formRef = useRef(null);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden">
          {/* create blog form */}
          <form
            ref={formRef}
            action={async (formData) => {
              let obj = {
                title: formData.get("title"),
                description: formData.get("description"),
                author: formData.get("author"),
              };
              addBlog(obj);
              // formRef.current?.reset();
            }}
            className="w-full lg:w-1/2 p-8 flex flex-col gap-6"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-white">
                Create a New Blog
              </h2>
              <p className="text-white/70 text-sm mt-2">
                Share your thoughts with the world. Fill out the form below to
                publish your blog.
              </p>
            </div>

            <input
              className="w-full text-sm bg-white/10 border border-white/30 text-white placeholder-white/70 py-2 px-4 rounded-full focus:outline-none focus:border-emerald-500 transition"
              type="text"
              name="title"
              placeholder="Enter Blog Title"
              required
            />
            <textarea
              className="w-full text-sm bg-white/10 border border-white/30 text-white placeholder-white/70 py-2 px-4 rounded-xl focus:outline-none focus:border-emerald-500 transition"
              name="description"
              placeholder="Enter Description"
              required
              rows={3}
            ></textarea>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white/70 file:text-white/70 file:bg-transparent file:border-0 file:p-0 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
            />
            <input
              className="w-full text-sm bg-white/10 border border-white/30 text-white placeholder-white/70 py-2 px-4 rounded-full focus:outline-none focus:border-emerald-500 transition"
              type="text"
              name="author"
              placeholder="Enter Author Name"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold backdrop-blur-sm border border-emerald-500 bg-emerald-700/40 focus:outline-none focus:bg-emerald-400/10 hover:bg-emerald-400/10 text-white mx-auto text-center rounded-full relative transition-all duration-300 cursor-pointer"
              value={"Add Blog"}
            >
              Publish Your Blog
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </form>

          {/* right side image */}
          <div className="lg:block hidden w-full lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/7046399/pexels-photo-7046399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
