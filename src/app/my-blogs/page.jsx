"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/app/components/BlogCard";
import BlogsPagination from "@/app/components/BlogPagination";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MotionUp } from "@/components/ui/motion-up";

export default function MyBlogs({ searchParams }) {
  const [resData, setResData] = useState({
    data: [],
    totalPages: 0,
    page: 1,
    error: false,
  });
  const page = parseInt(searchParams?.page) || 1;
  const limit = parseInt(searchParams?.limit) || 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/myblogs?page=${page}&limit=${limit}`, {
          credentials: "include",
          cache: "no-cache"
        });
        const data = await res.json();
        setResData(data);
      } catch (err) {
        console.log("Error fetching blogs:", err);
        setResData({ data: [], totalPages: 0, page, error: true });
      }
    };
    fetchBlogs();
  }, [page, limit]);

  return (
    <>
      <Header />

      <MotionUp delay={0}>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md pt-18">
          <h1 className="font-semibold text-center lg:text-4xl md:text-2xl text-2xl text-white pb-4">
            My Blogs
          </h1>

          <div className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-2xl h-10 mx-auto">
            {/* Gradients */}
            <div className="absolute left-1/2 top-0 w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] blur-sm" />
            <div className="absolute left-1/2 top-0 w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-1/2 top-0 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] blur-sm" />
            <div className="absolute left-1/2 top-0 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />

            {/* Radial mask to smooth edges */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </MotionUp>

      <div className="mt-10 mb-10 flex flex-wrap gap-5 justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {resData.error ? (
          <p className="text-red-400 text-center lg:text-base text-sm mt-5 mb-14">
            Failed to fetch user blogs. Please try again later.
          </p>
        ) : resData.data.length > 0 ? (
          resData.data.map((blog, index) => (
            <MotionUp key={blog._id} delay={index * 0.1}>
              <BlogCard data={blog} basePath="my-blogs" />
            </MotionUp>
          ))
        ) : (
          <p className="text-emerald-400 text-center mt-10 mb-14">
            User blogs not available.
          </p>
        )}
      </div>

      {!resData.error && resData.data.length > 0 && (
        <div className="flex justify-center mt-6 max-w-5xl mx-auto">
          <BlogsPagination
            page={resData.page}
            limit={limit}
            total={resData.total}
            basePath="my-blogs"
          />
        </div>
      )}

      <Footer />
    </>
  );
}
