var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;


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


UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
  // console.log({d : data , p : this.password})
  return bcrypt.compare(data, this.password);
};

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);