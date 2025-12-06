const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: {
      url: { type: String }, 
      public_id: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default UserModel;
