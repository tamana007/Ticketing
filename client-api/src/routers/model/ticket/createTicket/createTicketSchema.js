const mongoose=require('mongoose');

const createTicketSchema=new mongoose.Schema({
  title:{
    type:String
    
  },
  severity:{
    type:String
  },
  description:{
    type:String
  },
  openAt:{
    type:Date,
    default:Date.now()
  },
  creator:{
    type:String
  },
  department:{
    type:String
  },
  creatorDepartment:{
    type:String
  },
  assignee:{
    type:String
  },
  comment: {
    type: String,
    // required: true  // This field is required
  },
  status: {
    type: String,
    // required: true  // This field is required
  },
});
// module.exports={"createTicketSchema":createTicketSchema};
module.exports = {
  createTicketSchema: mongoose.model("createtickets", createTicketSchema),
};