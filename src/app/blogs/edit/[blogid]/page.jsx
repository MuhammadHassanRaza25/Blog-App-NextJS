"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRef } from "react";

export default function EditBlog() {
  const formRef = useRef(null);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 pt-12 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden">
          {/* edit blog form */}
          <form
            ref={formRef}
            // action={async (formData) => {
            //   let obj = {
            //     title: formData.get("title"),
            //     description: formData.get("description"),
            //     author: formData.get("author"),
            //   };
            //   // formRef.current?.reset();
            // }}
            className="w-full lg:w-1/2 p-8 flex flex-col gap-6"
          >
            {/* Background effect behind the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-gray-900/30 to-teal-900/30 -z-10">
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-white">Edit This Blog</h2>
              <p className="text-white/70 text-sm mt-2">
                Need to change something? Use the form below to update your blog
                post.
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
              className="group relative w-full px-4 py-2 font-semibold text-white bg-emerald-700/40 border border-emerald-500 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/10 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
            >
              Edit Blog
              {/* Underline on Hover */}
              <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
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
