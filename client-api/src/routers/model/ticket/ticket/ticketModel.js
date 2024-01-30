const { Mongoose } = require('mongoose');
// const {MyTicketSchema}=require('./ticketSchema');
const {MyTicketSchema}=require('../ticket/ticketSchema.js')


//Function to insert ticket into the database
const addTicket=(ticket)=>{
  try {
    const add=MyTicketSchema(ticket).save();
    console.log('added TT',add);
return add;
    
  } catch (error) {
    return error;
    
  }

}

module.exports={addTicket,}