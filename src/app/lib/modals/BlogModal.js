const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true }, // unique: true karne se har blog title unique hoga.
    description: String,
    author: String,
  },
  {
    timestamps: true, //createdAt & updatedAt ye sab ye manage karleta hai, alag dene ki zarorat nhi hai.
  }
);

const BlogModal = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema); // hamne pehle models main check kia ke Blogs ka model hai to sahi hai, nhi hai to create kardo.

export default BlogModal;
