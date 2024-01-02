const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
  Name:{
type:String,
maxlength:50,
required:true
  },
  Company:{
    type:String,
maxlength:50,
required:true

  },
  Address:{
    type:String,
maxlength:50,
required:true

  },
  Phone:{
    type:String,
maxlength:50,
required:true

  },
  email:{
    type:String,
maxlength:50,
required:true

  }
})

module.exports={
  UserSchema:mongoose.model('UserCollection',UserSchema)
}