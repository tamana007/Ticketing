// const express =require('express');
// const router=express.Router();

// router.all('/',(req,res,nex)=>{
//  res.json({message:'From TicketRouter'})

// })
// module.export=router;


const express=require('express');
const router=express.Router();

router.all('/',(req,res,next)=>{
  res.json({message:"ticket router"})
})

module.exports=router;



