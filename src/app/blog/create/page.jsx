import { verifyUser } from "@/app/lib/verifyUser";
import { redirect } from "next/navigation";
import CreateBlog from "./CreateBlog";


export default async function CreateBlogPage() {
  const user = await verifyUser();

  if (!user) {
    redirect("/login"); 
  }

  return <CreateBlog/>; 
}