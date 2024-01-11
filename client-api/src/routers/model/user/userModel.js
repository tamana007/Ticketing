const { UserSchema } = require("./UserSchema.js");
const RefreshToken = require('./refreshTokenModel.js')


//:::::::::::::::::::::::::::::

const insertUser = async (userObj) => {
  try {
    const user = await UserSchema(userObj).save();
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await UserSchema.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

// const storeUserRefreshJWT = (_id, refreshJWT) => {
//   return new Promise((resolve, reject) => {
//     try {
//       UserSchema.findOneAndUpdate(
//         { _id },
//         { $set: { "refreshJWT.addedAt": Date.now() } },
//         { new: true }
//       )
//         .then((refreshJWT) => resolve(refreshJWT))
//         .catch((error) => {
//           console.log(error)

//           reject(error)
//         });
//     } catch (error) {
//       console.log(error)

//       reject(error);
//     }
//   });
// };
//...................................................................

// const storeUserRefreshJWT = async (_id, refreshJWT) => {
//   try {
//     const user = await UserSchema.findOneAndUpdate(
//       { _id },
//       { $set: { "refreshJWT.token": refreshJWT, "refreshJWT.addedAt": Date.now() } },
//       { new: true }
//     );
//     console.log(user);
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw err;  // Make sure to rethrow the error so it can be caught by the calling function
//   }
// };

const storeUserRefreshJWT = async (_id, refreshJWT) => {
  try {
    const refreshToken = new RefreshToken({
      token: refreshJWT,
      user: _id,
    });
    await refreshToken.save();
    console.log("Refresh token stored successfully:", refreshToken);
    return refreshToken;
  } catch (err) {
    console.error("Error storing refresh token:", err);
    throw err;
  }
};


// const storeUserRefreshJWT = async (_id,refreshJWT) => {
//   try {
//     const user = await UserSchema(refreshJWT).save();
//     console.log(user);
//     return user;
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = {
  insertUser,
  getUserByEmail,
  storeUserRefreshJWT,
};
