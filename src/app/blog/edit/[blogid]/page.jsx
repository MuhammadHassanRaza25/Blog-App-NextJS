import { verifyUser } from "@/app/lib/verifyUser";
import { redirect } from "next/navigation";
import EditBlog from "./EditBlog";

export default async function EditBlogPage() {
 const user = await verifyUser();

  if (!user) {
    redirect("/login"); 
  }

  return <EditBlog/>; 
}
