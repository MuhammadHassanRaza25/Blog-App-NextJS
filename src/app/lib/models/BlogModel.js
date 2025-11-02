const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    description: String,
    author: String,
  },
  {
    timestamps: true, 
  }
);

const BlogModel = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema); // hamne pehle models main check kia ke Blogs ka model hai to sahi hai, nhi hai to create kardo.

export default BlogModel;
