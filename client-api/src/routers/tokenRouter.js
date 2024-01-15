const express=require('express')
const router=express.Router();

router.get('/',async(req,res,next)=>{
  const {authorization}=req.headers;

  // const decoded=await verifyRefreshJWT(authorization);
  // if(decoded.email)
  console.log('Token Route Hit');
  res.json({message:authorization})
})

module.exports=router;