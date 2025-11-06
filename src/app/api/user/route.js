import { ConnectDB } from "@/app/lib/dbConnect";
import UserModel from "@/app/lib/models/UserModel";
import { verifyUser } from "@/app/lib/verifyUser";

export async function GET() {
  await ConnectDB();
  const userObj = await verifyUser();

  if (!userObj) return Response.json({ user: null, msg: "Not logged in" }, { status: 401 });

  const user = await UserModel.findById(userObj.id).select("-password");
  return Response.json({ user });
}
