const express = require("express");
// const {userAuthentication}=require('../middlewares/authorization')
// const {userAuthentication}=require('../middlewares/authorization')
const { userAuthorization } = require("../middlewares/authorization");
const router = express.Router();
// const {setPasswordResetPin}=require('./model/resetPin')
const { setPasswordResetPin } = require("./model/resetPin/ResetPinModel");
const { emailProcccess } = require("../helpers/emailHelper");

const {
  insertUser,
  getUserByEmail,
  storeJWT,
  storeUserRefreshJWT,
} = require("./model/user/userModel");
const User = require("./model/user/userModel");
const { letBcrypt, comparePasswords } = require("../helpers/bcryptHelper");
const { createAccessJWT, createRefreshJWT } = require("../helpers/jwtHelper");
const RefreshToken = require("./model/user/refreshTokenModel");
const { route } = require("./ticketRouters");

//..........................Register....................................
router.all("/", (req, res, next) => {
  next();
});
router.post("/", async (req, res, next) => {
  const { Name, Company, Address, Phone, email, password, isAdmin } = req.body;
  try {
    const hashedPass = await letBcrypt(password);
    const newUserObj = {
      Name,
      Company,
      Address,
      Phone,
      email,
      password: hashedPass,
      isAdmin,
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
});

//::::::::::::::::::::::::::::::::::::GET::::::::::::::::::::::::::::::::::::

// router.get("/",userAuthentication,(req,res)=>{
router.get("/", userAuthorization, (req, res) => {
  //Data comes from database

  const user = {
    Name: "Tamu",
    Company: "sdg",
    Address: "gag",
    Phone: "45345",
    email: "t@gmgdj",
    password: "abc",
  };
  res.json({ user });
});

//....................................LOGIN....................................................

router.post("/login", async (req, res) => {
  //If user name and password not available: Invalaid user name and password
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({ status: "error", message: "Invalaid Form submission" });
  }

  const user = await getUserByEmail(email);
  // console.log("user isADmin", user.isAdmin);

  const passFromDb = user?._id ? user?.password : null;
  console.log(user?.password, "user_Paswrd");

  !!!passFromDb && res.json({ status: "invalaid email or password" });

  const result = await comparePasswords(password, passFromDb);
  // console.log(result,'paswd ');
  console.log("Entered Password:", password);
  console.log("Password from DB:", passFromDb);
  console.log("Comparison Result:", result);

  if (result) {
    const accessJWT = await createAccessJWT({
      email: user.email,
      isAdmin: user.isAdmin,
      id:user._id,

    });
    const refreshJWT = await createRefreshJWT(user.email, user._id); // Pass user._id as the second parameter

    // Store refresh token in refreshTokens collection
    await storeUserRefreshJWT(user._id, refreshJWT);

    res.cookie("refreshToken", refreshJWT, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessJWT, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.json({ status: 200, message: "succeed", accessJWT, refreshJWT });
  } else {
    res.json({ status: 400, message: "Password not matches matches---" });
  }
});
//::::::::::::::::::::::::::::::::Reset Pin::::::::::::::::::::::::::::::::::::::::::::::::

router.post("/reset", async (req, res) => {
  const { email } = req.body;
  // const user = await UserSchema.findOne({email});
  const user = await getUserByEmail(email);

  // Check if user exists for the email
  if (user?._id) {
    // Create unique 6 digits pin
    const setPin = await setPasswordResetPin(email);

    await emailProcccess({
      email,
      pin: setPin.pin,
      type: "request-new-password",
    });
  } else {
    return res.status(404).json({ message: "User not found" });
  }

  return res.json({
    status: "success",
    message: "The password reset pin will be sent shortly.",
  });
});

//:::::::::::::::::::::::::UPDATE RESET PASSWORD::::::::::::::::::::::::::::::::::::::::

router.patch("/reset-password", async (req, res) => {
  //1- Received email and pin..
  const { email, pin, newPassword } = req.body;

  //Retrieve Pin object from MongoDB.
  const getPin = await getPinByEmail(email, pin);

  //2- Validate pin
  if (getPin?._id) {
    const dbDate = getPin.addedAt;
    const expiresIn = 1; //expiry data shouldn't be more than 1 day.

    let expDate = dbDate.setDate(dbDate.getDate() + expiresIn);
    const today = new Date();

    if (today > expDate) {
      return res.json({ status: "error", message: "Invalid or expired pin." });
    }

    //3- Encrypt new Password.
    const hashedPass = await hashPassword(newPassword);
    //4- Updated DB
    const user = await updatePassword(res, email, hashedPass);

    if (user._id) {
      //5- send email notification
      await emailProcccess({ email, type: "update-password-success" });

      //6- delete pin from db
      deletePin(email, pin);

      return res.json({
        status: "success",
        message: "Your password has been updated",
      });
    }
  }

  res.json({
    status: "error",
    message:
      "Unable to update your password. plz verify your pin or email address",
  });
});

//------------------------------------LOGOUT-----------------------------------------
router.delete("/logout", userAuthorization, (req, res, next) => {
  const { userAuthorization } = req.header;
  const _id = req.user_id;
  res.clearCookie("refreshToken");
  res.clearCookie("accessToken");
  res.json({ userAuthorization });
});

module.exports = router;
