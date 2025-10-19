"use server"

import { revalidatePath } from "next/cache";

export async function signupUser(userObj){
  try{
    // const userData = userObj
    // console.log('User Data In Actions ==>', userData);
    
    await fetch(`${process.env.BASE_URL}api/users`, {
      method: "POST",
      body: JSON.stringify(userObj)    
    })
    
    revalidatePath('/');
  }
  catch(err){
    console.log("error==>", err);
  }
}