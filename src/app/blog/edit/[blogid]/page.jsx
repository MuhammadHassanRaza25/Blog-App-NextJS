import { verifyUser } from "@/app/lib/verifyUser";
import { redirect } from "next/navigation";
import EditBlog from "./EditBlog";

export default async function EditBlogPage({ params }) {
  const user = await verifyUser();

  if (!user) {
    redirect("/login");
  }

  const { blogid } = await params;

  return <EditBlog blogid={blogid} />;
}
