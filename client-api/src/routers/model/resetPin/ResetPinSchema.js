const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResetPinSchema = new Schema({
 
  pin: {
    type: String,
    maxlength: 6,
  
  },
  email: {
    type: String,
    maxlength: 50,
    
  },
 
});

// module.exports = {
//   ResetPinSchema: mongoose.model("ResetPinSchema", ResetPinSchema),
// };

module.exports = {
  ResetPinSchema: mongoose.model("ResetPinSchema", ResetPinSchema),
};
