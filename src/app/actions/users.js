"use server";

import { revalidatePath } from "next/cache";

export async function signupUser(userObj) {
  try {
    // const userData = userObj
    // console.log('User Data In Actions ==>', userData);

    await fetch(`${process.env.BASE_URL}api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    revalidatePath("/");
  } catch (err) {
    console.log("error==>", err);
  }
}

export async function loginUser(userObj) {
  try {
    // const userData = userObj
    // console.log('Login Data In Actions ==>', userData);

    await fetch(`${process.env.BASE_URL}api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    revalidatePath("/");
  } catch (err) {
    console.log("error==>", err);
  }
}
