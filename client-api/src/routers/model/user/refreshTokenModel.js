// const mongoose = require("mongoose")

// const RefreshToken=new mongoose.Schema({
//   toke:String,
//   user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User"
//   }
// })
// module.exports=mongoose.model("RefreshToken",RefreshToken)

const mongoose = require("mongoose");

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("RefreshToken", RefreshTokenSchema);
