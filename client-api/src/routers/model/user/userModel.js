const {UserSchema}=require('./UserSchema.js')

const insertUser=(userObj)=>{
  UserSchema(userObj).save().then ((data)=>console.log(data))
  .catch((error)=>console.log(error))
}
module.export={
  insertUser,
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const { UserSchema } = require('./UserSchema.js');
// const mongoose = require('mongoose');

// // Create a User model using the UserSchema
// const User = mongoose.model('User', UserSchema);

// module.exports = User;


// const { UserSchema } = require('./UserSchema.js');
// const mongoose = require('mongoose');

// // Create a User model using the UserSchema
// const User = mongoose.model('User', UserSchema);

// module.exports = User;    