import { ConnectDB } from "../../lib/dbConnect";
import BlogModel from "@/app/lib/models/BlogModel";

export async function GET(request) {
  await ConnectDB();
  const blogs = await BlogModel.find();
  console.log("Blogs From MongoDB ===>", blogs);

  return Response.json({
    data: blogs,
    msg: "Blogs Fetched Successfully.",
  });
}

export async function POST(request) {
  try {
    await ConnectDB();
    const blogs = await request.json();
    // console.log('checking ===>', blogs);

    const addBlog = await new BlogModel({ ...blogs }); // model main data dia.
    await addBlog.save(); // then DB main save kardia.

    // console.log("Blog Added Successfully ===>", addBlog);

    return Response.json({
      data: addBlog,
      msg: "Blog Added Successfully",
    });
  } catch (err) {
    console.error("Error adding blog ==>", err);
    return Response.json({ msg: "Error In Adding Blog" }, { status: 500 });
  }
}
