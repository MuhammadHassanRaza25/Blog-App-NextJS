const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {type: String, unique: true}, // unique: true karne se har blog title unique hoga.
    body: String,
    createdAt: {type: Date, default: Date.now},
    author: String
})

const BlogModal = mongoose.model.Blogs || mongoose.model("Blogs", BlogSchema); // (||) means agar pehle se modal hai to sahi h warna new banado.

export default BlogModal;