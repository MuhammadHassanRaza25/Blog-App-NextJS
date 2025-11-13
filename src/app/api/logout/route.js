import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies(); 

    cookieStore.set("accessToken", "", { expires: new Date(0), path: "/" });
    cookieStore.set("refreshToken", "", { expires: new Date(0), path: "/" });

    return NextResponse.json({ msg: "User Logged Out Successfully" });
  } catch (error) {
    return NextResponse.json({ msg: "Internal Error, Try Again" }, { status: 500 });
  }
}
