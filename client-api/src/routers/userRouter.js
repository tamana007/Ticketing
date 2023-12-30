const express=require('express');
const router=express.Router();
// const {insertUser}=require('./model/user/userModel')
const User=require('./model/user/userModel')

router.all('/',(req,res,next)=>{
  const requestData = req.body;

  //db:
  
  res.json({message:"returned from user router", data: requestData})
  next();
})

module.exports=router;