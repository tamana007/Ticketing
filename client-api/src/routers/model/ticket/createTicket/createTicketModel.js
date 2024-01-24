const mongoose=require('mongoose');
const {createTicketSchema} = require('./createTicketSchema.js');
const {UserSchema}=require('../../user/UserSchema.js')
// const model=mongoose.model();

// const createTicket=mongoose.model('createTicket',createTicketSchema);

//:::::::::::::::::::::FUNCTIONS::::::::::::::::::::::::::::::::::::::::

// Function to create a new ticket
const createticket = ticketObject =>{
  try {
    
  const savedTicket = createTicketSchema(ticketObject).save()
  console.log('ticket saved',savedTicket);
  return savedTicket;
  } catch (error) {
  console.log(error);
  return (error);
  }
}
//Function to fetch all tickets
const getAllTickets = async () => {
  try {
    const allTickets = await createTicketSchema.find({

    }); // Retrieve all tickets from the database
    return allTickets;
  } catch (error) {
    throw error;
  }
};
//Function to fetch tickets by id 
const getTicketById=async(clientId)=>{
//   try{
//     const ticketById=await createTicketSchema.findOne({Name:clientName})
// return getTicketById;
//   }
//   catch(error){
//     throw error;

//   }
try {
  //find who is logged in
  console.log('clientId',clientId)
  const findUser = await UserSchema.findOne({_id: clientId})
  console.log("findUser", findUser);
  const {Name} = findUser

  const findTickets = await createTicketSchema.find({
      // $and: [{assignee: Name},{status: {$ne:"Resolved"}}]
      assignee: Name
  })
  // console.log("This is tickets", findUser)
  return findTickets;
}
catch (error) {
  console.log(error);
  return (error);
}

}

//

module.exports={createticket,getAllTickets,getTicketById}

