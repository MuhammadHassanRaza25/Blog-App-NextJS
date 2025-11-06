import { ConnectDB } from "@/app/lib/dbConnect";
import UserModel from "@/app/lib/models/UserModel";
import bcrypt from "bcrypt";
import Joi from "joi";

// Joi schema for data validation, make sure data keynames are same like this schema keynames //
const signupSchema = Joi.object({
  username: Joi.string()
    .pattern(/^[\p{L}\p{N}_. ]+$/u)
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export async function POST(request) {
  await ConnectDB();
  const newUserData = await request.json();
  const { error, value } = signupSchema.validate(newUserData); //ye check karega ke data exact signupSchema ki tarah hai ya nhi.
  // console.log("User Validated Data ===>", value);
  
  if (error) {
    console.log("JOI ERROR ==>", error.message);
    return Response.json(
      {
        data: null,
        msg: error.message,
      },
      { status: 404 }
    );
  }

  const findUser = await UserModel.findOne({ email: value.email }); //same email ka user le ao.
  if (findUser) {
    return Response.json(
      {
        data: null,
        msg: "User exist with this email",
      },
      { status: 403 }
    );
  }

  // Coverting password into hash
  const hashedPassword = await bcrypt.hash(value.password, 12);
  value.password = hashedPassword;

  // Add user in DB
  const addUser = await new UserModel({ ...value });
  await addUser.save();
  console.log("User Registered Successfully ===>", addUser);

  return Response.json({
    data: addUser,
    msg: "User Added Successfully",
  });
}
