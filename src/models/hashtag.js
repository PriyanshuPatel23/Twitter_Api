import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const hashTag = mongoose.model("hashtag", hashtagSchema);
export default hashTag;
