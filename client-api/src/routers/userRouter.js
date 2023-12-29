const express=require('express');
const router=express.Router();

router.all('/',(req,res,next)=>{
  const requestData = req.body;

  //db:
  
  res.json({message:"returned from user router", data: requestData})
  next();
})

module.exports=router;