var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password:{
    type:String,
    required:true
  },
  addresss: {
    type: String,
    required: false
  }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);