import BlogDetailCard from "@/app/components/BlogDetailCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function BlogDetailPage({ params }) {

  let { blogid } = params;
  let blogData = null;
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blogs/${blogid}`, { cache: "no-store" });
    const data = await res.json();
    blogData = data.data;
  } catch (err) {
    console.error("Error fetching blog:", err);
    blogData = null;
  }

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-24">
        {blogData ? (
          <BlogDetailCard data={blogData} />
        ) : (
          <p className="text-center text-gray-500 mt-10">Blog not found</p>
        )}
      </div>
      <Footer />
    </>
  );
}
