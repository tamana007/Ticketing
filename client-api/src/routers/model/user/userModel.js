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



const storeUserRefreshJWT = async (_id, refreshJWT) => {
  try {
    const refreshToken = new RefreshToken({
      token: refreshJWT,
      user: _id,
      Name:"Tamu"
    });
    await refreshToken.save();
    console.log("Refresh token stored successfully:", refreshToken);
    return refreshToken;
  } catch (err) {
    console.error("Error storing refresh token:", err);
    throw err;
  }
};


module.exports = {
  insertUser,
  getUserByEmail,
  storeUserRefreshJWT,
};
