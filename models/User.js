var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    validate: {
      validator: async function(email) {
        const user = await this.constructor.findOne({ email });
        if(user) {
          if(this.id === user.id) {
            return true;
          }
          return false;
        }
        return true;
      },
      message: props => 'The specified email address is already in use.'
    },
    required: [true, 'User email required']
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