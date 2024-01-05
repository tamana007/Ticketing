// const bcrypt = require("bcrypt");
// //:::::::::::::::::::::::Hashed Password::::::::::::::::::::::::::::::::::::::::
// let letBcrypt = async (password) => {
//   try {
//     let salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     if (!hashedPassword) {
//       // something went wrong
//       console.log("something went wrong");
//     } else {
//       // successful
//       return hashedPassword;
//     }
//   } catch (error) {
//     console.error("hash error:", error.message);
//   }
// };

// // Compare hash from your password DB.
// const comparePasswords = (pinnedPass, passFromDb) => {
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(pinnedPass, passFromDb, (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// // letBcrypt();

// module.exports = {
//   letBcrypt,comparePasswords // Export the entire function
// };

const bcrypt = require("bcrypt");

let letBcrypt = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error("hash error:", error.message);
    throw error;
  }
};

const comparePasswords = (enteredPassword, storedHash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(enteredPassword, storedHash, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  letBcrypt,
  comparePasswords,
};
