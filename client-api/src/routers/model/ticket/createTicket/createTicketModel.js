const mongoose = require("mongoose");
const { createTicketSchema } = require("./createTicketSchema.js");
const { UserSchema } = require("../../user/UserSchema.js");
// const model=mongoose.model();

// const createTicket=mongoose.model('createTicket',createTicketSchema);

//:::::::::::::::::::::FUNCTIONS::::::::::::::::::::::::::::::::::::::::

// Function to create a new ticket
const createticket = (ticketObject) => {
  try {
    const savedTicket = createTicketSchema(ticketObject).save();
    // console.log("ticket saved", savedTicket);
    return savedTicket;
  } catch (error) {
    console.log(error);
    return error;
  }
};
//Function to fetch all tickets
const getAllTickets = async () => {
  try {
    const allTickets = await createTicketSchema.find({}); // Retrieve all tickets from the database
    return allTickets;
  } catch (error) {
    throw error;
  }
};
//Function to fetch tickets by spesific user
const getTicketById = async (clientId) => {
  try {
    //find who is logged in
    console.log("clientId", clientId);
    const findUser = await UserSchema.findOne({ _id: clientId });
    console.log("findUser", findUser);
    const { Name } = findUser;

    const findTickets = await createTicketSchema.find({
      // $and: [{assignee: Name},{status: {$ne:"Resolved"}}]
      assignee: Name,
    });
    // console.log("This is tickets", findUser)
    return findTickets;
  } catch (error) {
    console.log(error);
    return error;
  }
};
//Function to Get all tickets from specific department.............
const getTicketbyDept = (dept) => {
  //lets check if user belongs to that department or not:::
  const deptUser = UserSchema.find({});
  const department = createTicketSchema.find({ department: dept });
  return department;
};
//Function to fetch tickets by status
const getTicketbyStatus=(status,dept)=>{
const ticketStatus=createTicketSchema.find({status:status,department:dept})
  // ,department:{$ane:"HR"}})
// })
return ticketStatus;
}
//Function to fetch tickets by userId
const fetchbyParam=(id)=>{
  const result=createTicketSchema.find({_id:id});
  return result;

}

module.exports = {
  createticket,
  getAllTickets,
  getTicketById,
  getTicketbyDept,
  getTicketbyStatus,
  fetchbyParam,
};
