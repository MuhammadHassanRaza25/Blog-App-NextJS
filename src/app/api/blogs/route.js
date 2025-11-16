import { verifyUser } from "@/app/lib/verifyUser";
import { ConnectDB } from "../../lib/dbConnect";
import BlogModel from "@/app/lib/models/BlogModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Joi from "joi";

export async function GET(request) {
  await ConnectDB();

  const blogs = await BlogModel.find().populate("author", "username").lean();
  console.log("Blogs From MongoDB ===>", blogs);

  return Response.json({
    data: blogs,
    msg: "Blogs Fetched Successfully.",
  });
}

const blogSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
});

export async function POST(request) {
  try {
    await ConnectDB();
    const blog = await request.json();
    console.log("checking data in backend before post ===>", blog);

    const { error } = blogSchema.validate(blog);
    if (error) {
      console.log("JOI ERROR IN POST ==>", error.message);
      return NextResponse.json(
        {
          data: null,
          msg: error.message,
        },
        { status: 400 }
      );
    }

    const userObj = await verifyUser();
    if (!userObj) {
      return NextResponse.json(
        { msg: "User not logged in or session expired" },
        { status: 401 }
      );
    }

    const addBlog = await new BlogModel({
      ...blog,
      author: new mongoose.Types.ObjectId(userObj._id),
    });
    await addBlog.save();

    console.log("Blog Added Successfully ===>", addBlog);

    return NextResponse.json({
      data: addBlog,
      msg: "Blog Added Successfully",
    });
  } catch (err) {
    console.error("Error adding blog ==>", err);
    return NextResponse.json({ msg: "Error In Adding Blog" }, { status: 500 });
  }
}
