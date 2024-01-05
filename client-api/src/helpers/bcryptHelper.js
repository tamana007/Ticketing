const bcrypt = require("bcrypt");
//:::::::::::::::::::::::Hashed Password::::::::::::::::::::::::::::::::::::::::
let letBcrypt = async (password) => {
  try {
    let salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) {
      // something went wrong
      console.log("something went wrong");
    } else {
      // successful
      return hashedPassword;
    }
  } catch (error) {
    console.error("hash error:", error.message);
  }
};

// Compare hash from your password DB.
const comparePasswords = (pinnedPass, passFromDb) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pinnedPass, passFromDb, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// letBcrypt();

module.exports = {
  letBcrypt,comparePasswords // Export the entire function
};
