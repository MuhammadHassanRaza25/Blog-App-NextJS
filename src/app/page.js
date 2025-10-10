import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default async function Home() {
  let res = await fetch("http://localhost:3000/api/blogs");
  res = await res.json();

  return (
    <>
      <Header/>
      <Hero/>

      <div className="flex flex-wrap gap-5 justify-center bg-green-50 pt-10 pb-10 px-5 w-[100%]">
        {
          res.data?.map((blogs)=>(
          <div key={blogs._id} className="w-[80%] bg-green-100 text-green-800 p-3 border rounded-xl">
              <h1 className="font-semibold">Title: <span className="font-normal">{blogs.title}</span></h1>
              <p className="font-semibold">Desc: <span className="font-normal">{blogs.description}</span></p>
              <p className="font-semibold">Author: <span className="font-normal">{blogs.author}</span></p>
          </div>
          ))
        }
      </div>

      <Footer/>
    </>
  );
}
