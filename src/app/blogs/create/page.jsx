"use client";

import { addBlog } from "@/app/actions/blogs";
import Header from "@/components/Header";
import { useRef } from "react";

export default function CreateBlog() {
  const formRef = useRef(null);

  return (
    <>
    <Header/>
    
      <form
        ref={formRef}
        action={async (formData) => {
          let obj = {
            title: formData.get("title"),
            description: formData.get("description"),
            author: formData.get("author"),
          };
        //    console.log("Form Data ==>", obj);
          addBlog(obj);
        //   formRef.current?.reset();
        }}
        className="flex flex-col items-center gap-5 px-5 w-[100%] mt-10 mb-10"
      >
        <input
          className="w-[80%] bg-white border font-sans p-2.5 rounded-lg focus:outline-none"
          type="text"
          name="title"
          placeholder="Enter Blog"
          required
        />
        <textarea
          className="w-[80%] bg-white border font-sans p-2.5 rounded-lg focus:outline-none"
          type="text"
          name="description"
          placeholder="Enter Description"
          required
        ></textarea>
        <input
          className="w-[80%] bg-white border font-sans p-2.5 rounded-lg focus:outline-none"
          type="text"
          name="author"
          placeholder="Enter Author Name"
          required
        />
        <button
          type="submit"
          className="w-[80%] font-semibold text-2xl bg-amber-100 text-amber-800 cursor-pointer p-2 rounded-md"
          value={"Add Blog"}
        >
          Add Blog
        </button>
      </form>

      {/*Summary: hamny actions ke folder main todos.js main server action banaya hai or function name: addTodos rakha hai or form ke action main wohi function name dia hai or addTodo() wale function main formData dia hai phir form ko reset kia hai. input main jo name ki key hai us se addTodo wale function ke andar data mil raha hai.*/}
    </>
  );
}
