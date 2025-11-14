
"use server"

import { revalidatePath } from "next/cache";

export async function addBlog(obj){
  try{
    const blog = obj
    console.log("blog====>", blog);
    
    let res = await fetch(`${process.env.BASE_URL}/api/blogs`, {
      method: "POST",
      body: JSON.stringify(obj)    
    })
    
    const data = await res.json()
    revalidatePath("/");

    return{ok: res.ok, ...data};
  }
  catch(err){
    console.log("error==>", err);
  }
}
