// jwt.js
// const { setJWT, getJWT } = require("./redisHelper");
const jwt = require("jsonwebtoken");
const {storeUserRefreshJWT}=require('../routers/model/user/userModel');
// const { setJWT, getJWT } = require("./redisHelper.mjs");


//:::::::::::::::::::::::::ACCESS JWT:::::::::::::::::::::::::::::::
const  createAccessJWT = async (payload) => {
  try {
    const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
    console.log('jwt-aces-secret',accessJWT);
    // await setJWT(accessJWT);
    return accessJWT;
  } catch (err) {
    console.error('Error creating access JWT:', err);
    throw err;
  }
};

//:::::::::::::::::Refresh::::::::::::::::::::::::

const createRcessJWT = async (payload, _id) => {
  try {
    const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, { expiresIn: '1y' });
    await storeUserRefreshJWT(_id, refreshJWT); // Store the refresh JWT in MongoDB
    return refreshJWT;
  } catch (err) {
    console.error('Error creating refresh JWT:', err);
    throw err;
  }
};



// module.exports = {
//   createAccessJWT,
//   createRcessJWT,
// };


const createRefreshJWT = (payload) => {
  try{
    const accessJWT = jwt.sign(
      {
        payload,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1y" }
    );
  
    return Promise.resolve(accessJWT) ;
  }
  catch(err){
    return Promise.reject(err);

  }

  }
  //:::::::::::::::::::::Verify ACCESS Token::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const varifyAccessJWT= async (userJWT)=>{
    try {
    return jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET)
    } catch (error) {
      return Promise.reject(error)
    }



  }
  //::::::::::::::::::::::::::VERIFY REFRESH TOKEN::::::::::::::::::::::::::::::::::::::::::::::::

  const varifyRefreshJWT= async (userJWT)=>{
    try {
    return jwt.verify(userJWT, process.env.JWT_ACCESS_SECRET)
    } catch (error) {
      return Promise.reject(error)
    }



  }


module.exports = {
  createAccessJWT,
  createRefreshJWT,
  createRcessJWT,varifyAccessJWT,varifyRefreshJWT
};
