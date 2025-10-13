import BlogDetailCard from "@/app/components/BlogDetailCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function BlogDetailPage({ params }) {
  // let {blogid} = params

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-24">
        <BlogDetailCard />
      </div>
      <Footer />
    </>
  );
}
