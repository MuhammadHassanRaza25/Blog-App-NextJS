"use client";
import BlogDetailCard from "@/app/components/BlogDetailCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyBlogDetailPage() {
  const { blogid } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`/api/myblogs/${blogid}`, {
          credentials: "include",
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setBlogData(data.data);
      } catch (err) {
        console.log("Error:", err);
        setError(true);
      }

      setIsLoading(false);
    };

    fetchBlog();
  }, [blogid]);

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-24">
        {isLoading ? (
          <div className="h-40 flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-400 mt-20 mb-20">Failed to load blog. Please try again later.</p>
        ) : blogData ? (
          <BlogDetailCard data={blogData} backUrl="/my-blogs" />
        ) : (
          <p className="text-center text-gray-400 mt-10">Blog not found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
