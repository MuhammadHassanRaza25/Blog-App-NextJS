import { ConnectDB } from "../../lib/dbConnect"

export async function GET(request){
   await ConnectDB();
   return Response.json({
    data: [],
    msg: "Blogs Fetched Successfully."
   })
}