const { token } = require("morgan");
const {ResetPinSchema} = require("./ResetPinSchema");
const {random}=require('../../../utils/random')

const setPasswordResetPin = async(email) => {
  const randPin=await random(4);
  const restObj={
    email,
    pin:randPin,

  }
  return new Promise((resolve, reject) => {
    ResetPinSchema(restObj)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

module.exports = { setPasswordResetPin };
