const express = require("express");
const router = express.Router();
// const {insertUser}=require('./model/user/userModel')
const { insertUser } = require("./model/user/userModel");
const User = require("./model/user/userModel");
const { letBcrypt } = require("../helpers/bcryptHelper");

router.all("/", (req, res, next) => {
  // const requestData = req.body;
  next();
  // res.json({message:'geted',data:requestData})
});

router.post("/", async (req, res, next) => {
  const { Name, Company, Address, Phone, email, password } = req.body;
  try {
    const hashedPass = await letBcrypt(password);
    const newUserObj = {
      Name,
      Company,
      Address,
      Phone,
      email,
      password: hashedPass,
    };

    const result = await insertUser(newUserObj);
    console.log("body here", result);
    const requestData = req.body;
    res.json({ message: "New user created", result });
    next();
  } catch (err) {
    console.log(err);
    res.json({ status: "error", message: err.message });
  }

  

  //db:
});
router.post('/login',(req,res)=>{
  res.json({status:"success",message:"Logged in successfully"})

})




module.exports = router;
