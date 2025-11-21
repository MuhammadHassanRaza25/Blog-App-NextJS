"use client"
import BlogDetailCard from "@/app/components/BlogDetailCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function MyBlogDetailPage({ params }) {

  const { blogid } = params;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`/api/myblogs/${blogid}`, { credentials: "include", cache: "no-store" });
      const data = await res.json();
      setBlogData(data.data);
    };
    fetchBlog();
  }, [blogid]);

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-24">
        {blogData ? (
          <BlogDetailCard data={blogData} backUrl="/my-blogs" />
        ) : (
          <p className="text-center text-gray-500 mt-10">Blog not found</p>
        )}
      </div>
      <Footer />
    </>
  );
}
