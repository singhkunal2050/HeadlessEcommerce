import mongoose from "mongoose";

if(mongoose.models.Users){
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
}

module.exports = mongoose.models.Users || mongoose.model('Users', UsersSchema);