const { Mongoose } = require("mongoose");
// const {MyTicketSchema}=require('./ticketSchema');
const { MyTicketSchema } = require("../ticket/ticketSchema.js");

//Function to insert ticket into the database
const addTicket = (ticket) => {
  try {
    const add = MyTicketSchema(ticket).save();
    console.log("added TT", add);
    return add;
  } catch (error) {
    return error;
  }
};
//Function to read TT

// const readTT=useObj=>{
//   try {
//     return new Promise(resolve,reject)=>{
//       const retrieve=MyTicketSchema.find (useObj);
//       resolve(retrieve) ;
//     }
   
//   } catch (error) {
//     reject(error) ;
//   }
 
// }
const readTT =  (useObj) => {
  try {
    const retrieve = MyTicketSchema.find({status:useObj});
    return retrieve;
  } catch (error) {
    console.error('Error during readTT:', error);
    throw error; // rethrow the error for further handling, if needed
  }
};

// const readTT = useObj => {
//   return new Promise((resolve, reject) => {
//     try {
//       const retrieve = MyTicketSchema.find({status:useObj});
//       resolve(retrieve);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
module.exports = { addTicket,readTT, };
