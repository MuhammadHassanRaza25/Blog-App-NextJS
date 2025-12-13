import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard"
import { verifyUser } from "../lib/verifyUser";

export default async function AdminPage(){

    const user = await verifyUser();
    if(!user || user.role !== "admin"){
        redirect("/")
    }
    // console.log('Checking Role In Admin Page ===>', user.role);
     

    return(
        <AdminDashboard/>
    )
}