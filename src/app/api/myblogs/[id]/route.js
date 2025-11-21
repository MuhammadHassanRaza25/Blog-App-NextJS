import mongoose from "mongoose";
import BlogModel from "@/app/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/lib/dbConnect";

export async function GET(request, { params }) {
  await ConnectDB()
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { data: null, msg: "Invalid Blog ID" },
      { status: 404 }
    );
  }

  try {
    const singleBlog = await BlogModel.findById(id)
      .populate("author", "username")
      .lean();

    if (!singleBlog) {
      return NextResponse.json(
        { data: null, msg: "Blog Not Exist" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: singleBlog, msg: "Blog Found" });
  } catch (error) {
    return NextResponse.json(
      { data: null, msg: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
