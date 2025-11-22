import mongoose from "mongoose";
import BlogModel from "@/app/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/lib/dbConnect";

export async function GET(request, { params }) {
  await ConnectDB();
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

export async function PUT(request, { params }) {
  await ConnectDB();
  const { id } = params;
  const body = await request.json(); // data for edit

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ msg: "Invalid Blog ID" }, { status: 404 });
  }

  try {
    const updateBlog = await BlogModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updateBlog) {
      return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ data: updateBlog, msg: "Blog updated" });
  } catch (err) {
    return NextResponse.json(
      { msg: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  await ConnectDB();
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ msg: "Invalid Blog ID" }, { status: 404 });
  }

  try {
    const deleteBlog = await BlogModel.findByIdAndDelete(id);

    if (!deleteBlog) {
      return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Blog deleted successfully" });
  } catch (err) {
    return NextResponse.json(
      { msg: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}
