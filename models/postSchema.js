import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    content: {
      type: String,
      required: [true, "Please add content"],
    },
    author: {
      type: String,
      required: [true, "Please add an author"],
    },
  },
  { timestamps: true },
  { collection: "posts" }
);

export default mongoose.model("Post", postSchema);
