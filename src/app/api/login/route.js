import { ConnectDB } from "@/app/lib/dbConnect";
import UserModel from "@/app/lib/models/UserModel";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export async function POST(request) {
  try {
    await ConnectDB();
    const userData = await request.json();
    const { error, value } = loginSchema.validate(userData);
    // console.log("Validated Login Data ===>", value);

    if (error) {
      console.log("JOI ERROR ==>", error.message);
      return NextResponse.json(
        {
          data: null,
          msg: error.message,
        },
        { status: 400 }
      );
    }

    // Matching Email
    const user = await UserModel.findOne({ email: value.email }).lean();
    //.lean() means plain javascript object main convert kardo, is object ko user ka token generate karne ke liye use karte hain.
    // Agar ap only email find karenge phir bhi findOne DB se user ka pora object lata hai.
    if (!user) {
      console.log("Invalid Email");
      return NextResponse.json(
        {
          data: null,
          msg: "Invalid Email",
        },
        { status: 404 }
      );
    }

    // Matching password
    const matchPassword = await bcrypt.compare(value.password, user.password);
    if (!matchPassword) {
      console.log("Invalid Credentials");
      return NextResponse.json(
        {
          data: null,
          msg: "Invalid Credentials",
        },
        { status: 401 }
      );
    }

    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    // Generate Token (short-lived)
    const accessToken = jwt.sign(payload, process.env.AUTH_SECRET, {
      expiresIn: "15m",
    });

    // Refresh Token (long-lived)
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "15d",
    });

    // Response object
    const response = NextResponse.json({ //NextResponse because in normal response we do not set cookies
      data: { user: payload },
      msg: "User Login Successfully",
    });

    // Set cookies through Response
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 15 * 60, // 15 minutes
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 15 * 24 * 60 * 60, // 15 days
    });

    console.log("User Login Successfully!");
    return response;
  } catch (err) {
    console.error("Login Error ==>", err);
    return NextResponse.json(
      {
        data: null,
        msg: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
