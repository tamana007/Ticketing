const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MyTicketSchema=new Schema({
  subject:{
    type:String,
    required:true
  },
  status:{
    type:String,
  },
openedAt:{
  type:Date,
  required:true,
  default:Date.now()
},

  conversation: [
    {
      sender:{
        type:String,
      },
      message:{
        type:String,
      },
      msgAt:{
        type:Date,

      },
    },
  
],
    
  
})
module.exports={
  MyTicketSchema:mongoose.model("myTicket",MyTicketSchema)
}
