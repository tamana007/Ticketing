// jwt.js
// const { setJWT, getJWT } = require("./redisHelper");
const jwt = require("jsonwebtoken");
const {storeUserRefreshJWT}=require('../routers/model/user/userModel');
// const { setJWT, getJWT } = require("./redisHelper.mjs");

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

const createRcessJWT = async (payload, _id) => {
  try {
    const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, { expiresIn: '1h' });
    await storeUserRefreshJWT(_id, refreshJWT); // Store the refresh JWT in MongoDB
    return refreshJWT;
  } catch (err) {
    console.error('Error creating refresh JWT:', err);
    throw err;
  }
};

// const createRefreshJWT = (payload) => {
//   try {
//     const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, { expiresIn: '1h' });
//     return refreshJWT;
//   } catch (err) {
//     console.error('Error creating refresh JWT:', err);
//     throw err;
//   }
// };

module.exports = {
  createAccessJWT,
  createRcessJWT,
};




// const jwt = require("jsonwebtoken");
// const { setJWT,getJWT}=require("./redisHelper.mjs")



// const createAccessJWT = async(payload) => {
//   // const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET,{expiresIn:"15m"});
//   const accessJWT = jwt.sign({ payload }, kajfdjfajglfdj,{expiresIn:"15m"});

//   await setJWT(accessJWT)
//   return accessJWT;
// };

// const setJWT = async (key, value) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       await client.set(key, value, (err, reply) => {
//         if (err) {
//           console.error('Redis Set Error:', err);
//           reject(err);
//         } else {
//           resolve(reply);
//         }
//       });
//     } catch (err) {
//       console.error('Redis Set Error:', err);
//       reject(err);
//     }
//   });
// };

// const createAccessJWT = async (payload) => {
//   try {
//     const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
//     await setJWT('your_key', accessJWT);
//     return accessJWT;
//   } catch (err) {
//     console.error('Error creating access JWT:', err);
//     throw err;
//   }
// };



// const createAccessJWT = async (payload) => {
//   try {
//     const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
//     await setJWT('your_key', accessJWT);
//     return accessJWT;
//   } catch (err) {
//     console.error('Error creating access JWT:', err);
//     throw err;
//   }
// };


const createRefreshJWT = (payload) => {
  try{
    const accessJWT = jwt.sign(
      {
        payload,
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "1h" }
    );
  
    return Promise.resolve(accessJWT) ;
  }
  catch(err){
    return Promise.reject(err);

  }

  }


module.exports = {
  createAccessJWT,
  createRefreshJWT,
};
