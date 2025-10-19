
"use server"

import { revalidatePath } from "next/cache";

export async function addBlog(obj){
  try{
    const blog = obj
    console.log("blog====>", blog);
    
    await fetch(`${process.env.BASE_URL}api/blogs`, {
      method: "POST",
      body: JSON.stringify(obj)    
    })
    
    revalidatePath('/');
  }
  catch(err){
    console.log("error==>", err);
  }
}

// export async function updateTodo(obj){
//   try{
//     await fetch(`${process.env.BASE_URL}api/todos`, {
//       method: "PUT",
//       body: JSON.stringify(obj)    
//     });
    
//     revalidatePath('/todos');
//   }
//   catch(err){
//     console.log("error==>", err);
//   }
// }

// export async function deleteTodo(obj){
//   try{
//     await fetch(`${process.env.BASE_URL}api/todos`, {
//       method: "DELETE",
//       body: JSON.stringify(obj)    
//     });
    
//     revalidatePath('/todos');
//   }
//   catch(err){
//     console.log("error==>", err);
//   }
// }
