const express=require('express');
const { userAuthorization } = require('../middlewares/authorization');
const router=express.Router();

// router.all('/',(req,res,next)=>{
//   res.json({message:"ticket router"})
// })


router.post ("/createTicket", userAuthorization, (req, res, next) =>{
  const email = req.email
  const ticketInfo = req.body;
  const ticket = createTicketDB()
})
module.exports=router;



