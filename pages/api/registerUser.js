// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: false,
  }
);

export default function handler(req, res) {
  res.status(200).json({ name: "Created USer" });
}
