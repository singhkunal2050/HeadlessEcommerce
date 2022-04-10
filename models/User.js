import mongoose from "mongoose";
if(mongoose.models.User===undefined){
  const UserSchema = mongoose.model(
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

module.exports = mongoose.models.User || mongoose.model('Users', UserSchema);