import mongoose from "mongoose";
import BlogModal from "@/app/lib/modals/BlogModal"

export async function GET(request, {params}){
    
    let { id } = params
    // console.log("Blog ID is here ===>", id);

    // Checking blog id is valid or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return Response.json({
            data: null,
            msg: "Invalid Blog ID",
        }, {status: 404})
    }

    try{
        let singleBlog = await BlogModal.findById(id)

        // ye jab work karega jab url main valid mongodb ki id ho:24-character hexadecimal string, or uska blog exist nhi karta ho.
        if (!singleBlog) { 
            return Response.json({
                data: null,
                msg: "Blog Not Exist"
            }, 
            { status: 404 });
        }

        return Response.json({
            data: singleBlog,
            msg: "Blog Found"
        })
    } catch(error){
         return Response.json({
            data: null,
            msg: "server error",
            error: error.message
        }, { status: 500 });
    }
}