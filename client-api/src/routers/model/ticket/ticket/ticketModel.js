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

const readTT =  (useObj) => {
  try {
    const retrieve = MyTicketSchema.find({status:useObj});
    return retrieve;
  } catch (error) {
    console.error('Error during readTT:', error);
    throw error; // rethrow the error for further handling, if needed
  }
};

// Update TT function
const updateTT = async (id, conversationIndex, message, status) => {
  try {
    const updateKeyMessage = `conversation.${conversationIndex}.message`;
    // const updateKeyStatus = `status`;
    const result = await MyTicketSchema.findByIdAndUpdate(
      id,
      {
        [updateKeyMessage]: message,
        status: status,
      },
      { new: true }
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

//Delete TT Function
const deleteTT=(id)=>{
  try {
  const del=MyTicketSchema.deleteOne(id)
  return del;
    
  } catch (error) {
    throw new Error(error.message);
    
  }

}

module.exports = { addTicket,readTT,updateTT,deleteTT };
