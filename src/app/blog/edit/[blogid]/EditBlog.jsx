"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function EditBlog({ blogid }) {
  const router = useRouter();
  const formRef = useRef(null);
  const [loading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState(null);

  const getBlogData = async () => {
    try {
      const res = await fetch(`/api/myblogs/${blogid}`, {
        credentials: "include",
        cache: "no-store",
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.msg);
        return;
      }

      setBlogData(result.data);
    } catch (error) {
      toast.error("Failed to load blog data");
    }
  };

  useEffect(() => {
    getBlogData();
  }, [blogid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(formRef.current);

    const body = {
      title: formData.get("title"),
      description: formData.get("description"),
    };

    try {
      const res = await fetch(`/api/myblogs/${blogid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });

      if (!res.ok) {
        const result = await res.json();
        const msg = result.msg;
        if (msg.includes("less")) {
          toast.error("title must be at less than 100 characters");
        } else if (msg.includes("title")) {
          toast.error("title must be at least 3 characters");
        } else if (msg.includes("description")) {
          toast.error("description must be at least 10 characters");
        } else {
          toast.error(msg);
        }
        setIsLoading(false);
        return;
      }

      toast.success("Blog updated successfully");
      setIsLoading(false);
      setTimeout(() => {
        router.push("/my-blogs");
      }, 1000);
    } catch (err) {
      toast.error(err.message);
      console.log("Error in editing the blog ==>", err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg overflow-hidden">
          {/* edit blog form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
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
              defaultValue={blogData?.title}
              placeholder="Enter Blog Title"
              required
            />
            <div className="w-full rounded-xl bg-white/10 border border-white/30 overflow-hidden">
              <textarea
                className="w-full resize-none box-border text-sm text-white placeholder-white/70 py-2 px-4 focus:outline-none focus:border-emerald-500 transition textarea-scrollbar overflow-y-auto rounded-xl"
                name="description"
                defaultValue={blogData?.description}
                placeholder="Enter Description"
                required
                rows={3}
              ></textarea>
            </div>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white/70 file:text-white/70 file:bg-transparent file:border-0 file:p-0 placeholder-gray-400 focus:outline-none focus:border-emerald-500/50"
            />
            <button
              type="submit"
              className="group relative w-full flex justify-center px-4 py-2 font-semibold text-white bg-emerald-700/40 border border-emerald-500 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/10 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
            >
              {loading ? <div className="formLoader"></div> : "Edit Blog"}
              {/* Underline on Hover */}
              <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-300 group-hover:w-3/4" />
            </button>
          </form>

          {/* right side image */}
          <div className="lg:block hidden w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="/images/formimg1.jpg"
              alt="Blog Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
