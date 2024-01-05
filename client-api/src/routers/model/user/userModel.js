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

//   const getUserByEmail=(email)=>{
// return  new Promise((resolve,reject)=>{
//   try{
//     const emailResult=UserSchema.findOne({email},(error,data)=>{
//       if(error){
//         // console.log(error);
//         reject(error)
//       }
//       resolve(data)
//       })
     
//   }
  
//   catch (err){
//     // console.log(err);
//     reject(err);
//           }
  
// })
    

//   }
const getUserByEmail = async (email) => {
  try {
    const user = await UserSchema.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};









module.exports={
  insertUser,
  getUserByEmail
}
   