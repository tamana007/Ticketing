const express = require("express");
const router = express.Router();
// const {insertUser}=require('./model/user/userModel')
const { insertUser, getUserByEmail,storeJWT,storeUserRefreshJWT } = require("./model/user/userModel");
const User = require("./model/user/userModel");
const { letBcrypt, comparePasswords } = require("../helpers/bcryptHelper");
const { createAccessJWT, createRefreshJWT } = require("../helpers/jwtHelper");
// const {RefreshToken}=require('./model/user/refreshTokenModel')
const RefreshToken = require('./model/user/refreshTokenModel')


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
//....................................

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

  !!!passFromDb && res.json({ status: "invalaid email or password" });

  const result = await comparePasswords(password, passFromDb);
  // console.log(result,'paswd ');
  console.log("Entered Password:", password);
  console.log("Password from DB:", passFromDb);
  console.log("Comparison Result:", result);


if (result) {
    const accessJWT = await createAccessJWT(user.email);
    const refreshJWT = await createRefreshJWT(user.email, user._id); // Pass user._id as the second parameter

     // Store refresh token in refreshTokens collection
  await storeUserRefreshJWT(user._id, refreshJWT);

    res.cookie('refreshToken', refreshJWT, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie('accessToken', accessJWT, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    });

    res.json({ status: 200 , message: "succeed", accessJWT, refreshJWT });
  } else {
    res.json({ status: 400 , message: "Password not matches matches---" });
  }
});

module.exports = router;  
