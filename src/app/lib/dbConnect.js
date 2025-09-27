import mongoose from "mongoose";

export async function ConnectDB(){
    let isConnected = false;
    if(isConnected) return "DB is already connected.";

    try{
       let connected = await mongoose.connect(process.env.MONGODB_URI);
       console.log("DB connected successfully");
       if(connected.connection.readyState == 1) isConnected = true;
    }
    catch(error){
        console.log("Error", error);
    }
}