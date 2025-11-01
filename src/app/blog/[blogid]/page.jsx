import BlogDetailCard from "@/app/components/BlogDetailCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function BlogDetailPage({ params }) {
  
  let { blogid } = params;
  let res = await fetch(`${process.env.BASE_URL}/api/blogs/${blogid}`);
  let data = await res.json();
  let blogData = data.data
  console.log("Blog Data ====>",blogData);


  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-24">
        <BlogDetailCard data={blogData} />;
      </div>
      <Footer />
    </>
  );
}
