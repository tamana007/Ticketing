const express = require("express");
const router = express.Router();
// const {insertUser}=require('./model/user/userModel')
const { insertUser, getUserByEmail } = require("./model/user/userModel");
const User = require("./model/user/userModel");
const { letBcrypt, comparePasswords } = require("../helpers/bcryptHelper");
const { createAccessJWT, createRefreshJWT } = require("../helpers/jwtHelper");

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

router.post("/login", async (req, res) => {
  //If user name and password not available: Invalaid user name and password
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ status: "error", message: "Invalaid Form submission" });
  }
  const user = await getUserByEmail(email);
  console.log("userName:", user);

  const passFromDb = user?._id ? user?.password : null;
  console.log(user?.password, "user_Paswrd");

  !passFromDb && res.json({ status: "invalaid email or password" });

  const result = await comparePasswords(password, passFromDb);
  // console.log(result,'paswd ');
  console.log("Entered Password:", password);
  console.log("Password from DB:", passFromDb);
  console.log("Comparison Result:", result);

  if (result) {
    const accessJWT=createAccessJWT(user.email);
    const refreshJWT=createRefreshJWT(user.email)
    res.json({ status: "successful", message: "suceed",accessJWT,refreshJWT });
  } else {
    res.json({ message: "Password not matches matches---" });
  }
});

module.exports = router;
