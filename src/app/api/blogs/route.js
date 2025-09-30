import BlogModal from "@/app/lib/modals/BlogModal";
import { ConnectDB } from "../../lib/dbConnect"

export async function GET(request){
   await ConnectDB();
   const blogs = await BlogModal.find()
   console.log("Blogs From MongoDB ===>", blogs);
   
   return Response.json({
    data: blogs,
    msg: "Blogs Fetched Successfully."
   })
}

export async function POST(request){
  await ConnectDB();
  const blogs = await request.json()
  console.log('checking ===>', blogs);
  

  const addBlog = await new BlogModal({...blogs}) //pehle modal main data dia.
  await addBlog.save() //data dene ke baad DB main save kardia.

  console.log("Blog Added Successfully ===>", addBlog);
  

  return Response.json({
   data: addBlog, 
   msg: "Blog Added Successfully"
  })
}