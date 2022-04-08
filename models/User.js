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

module.exports = mongoose.model('User', userSchema);          