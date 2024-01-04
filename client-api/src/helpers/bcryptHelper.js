



// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// const hashPassword = async (password) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   } catch (error) {
//     throw new Error('Error hashing password: ' + error.message);
//   }
// };

// module.exports = {
//   hashPassword,
// };



// const bcrypt = require('bcrypt')

// let letBcrypt = async function() {

// let salt = await bcrypt.genSalt(10)
// console.log('salt:',salt)
// const hashedPassword = await bcrypt.hash('ali', salt)
// if(!hashedPassword ){
// // something went wrong
//   console.log('something went wrong')
// } else {
//  // successful
//   console.log('hsashedPass:',hashedPassword)
// }
  
// }

// letBcrypt();


// module.exports = {
//   hashedPassword,
//   };




  const bcrypt = require('bcrypt');

let letBcrypt = async (password) => {
  try {
    let salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) {
      // something went wrong
      console.log('something went wrong');
    } else {
      // successful
      return hashedPassword
    }
  } catch (error) {
    console.error('hash error:', error.message);
  }
};

// letBcrypt();

module.exports = {
  letBcrypt, // Export the entire function
};

