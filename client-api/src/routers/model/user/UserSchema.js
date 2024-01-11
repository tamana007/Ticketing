const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: {
    type: String,
    maxlength: 50,
    
  },
  Company: {
    type: String,
    maxlength: 50,
    
  },
  Address: {
    type: String,
    maxlength: 50,
    
  },
  Phone: {
    type: String,
    maxlength: 50,
  
  },
  email: {
    type: String,
    maxlength: 50,
    
  },
  password: {
    type: String,
    required: true,
  },
  refreshJWT:{
    token:{
      type:String,
      maxlength:500,
      default:''
    },
    addedAt:{
      type:Date,
      require:true,
      default:Date.now()
    }
  }
});

module.exports = {
  UserSchema: mongoose.model("UserCollection", UserSchema),
};
