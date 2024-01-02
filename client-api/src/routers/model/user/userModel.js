const {UserSchema}=require('./UserSchema.js')

// const insertUser= (userObj)=>{
//   UserSchema(userObj).save().then ((data)=> console.log(data))
//   .catch((error)=>console.log(error))
  //:::::::::::::::::::::::::::::

  const insertUser=async(userObj)=>{
    try{
      const user=await UserSchema(userObj).save();
console.log(user);
return user;
    }
    catch (err){
console.log(err);
    }
  }









module.exports={
  insertUser,
}
   