const express = require("express");
const {
  userAuthorization,
  adminAuthorization,
} = require("../middlewares/authorization");
const router = express.Router();
const {
  createticket,
  getAllTickets,getTicketById,
} = require("./model/ticket/createTicket/createTicketModel");

//Used to load middleware functions at a path ("/") for all HTTP request methods.
router.all("/", (req, res, next) => {
  next();
});

//:::::::::::::::::CREATE TICKET::::::::::::::::::::::::::::::::::::::::::::
router.post("/createTicket", async (req, res, next) => {
  console.log("import ", createticket);
  // try {
  const {
    title,
    severity,
    description,
    openAt,
    creator,
    department,
    creatorDepartment,
    assignee,
    comment,
  } = req.body;

  const ticketInfo = {
    title,
    severity,
    description,
    openAt,
    creator,
    department,
    creatorDepartment,
    assignee,
    comment,
  };

  // Call the createNewTicket function with the received ticketInfo
  const result = await createticket(ticketInfo);
  if (result._id) {
    res.json({ message: "New ticket created successfully", result });
  } else {
    res.json({ message: "trouble in creating a ew ticket" });
  }
});
router.post("/new", (req, res, next) => {
  res.json({ message: "this is new.." });
});

//:::::::::::::::::::::::READ TICKET:::::::::::::::::::::::::::::::::::::::::
router.get("/fetchTickets", adminAuthorization, async (req, res, next) => {
  try {
    // Fetch actual ticket data here
    const allTickets = await getAllTickets();
    res.json({ message: "Fetched tickets successfully", tickets: allTickets });
  } catch (error) {
    console.error("Error retrieving tickets:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//.........................Ready Ticket By user...............................
router.get("/ticketCreator", adminAuthorization, async (req, res)=>{
  try {                       
    console.log('user id', req.id);
    const userId = req.id;
    const result = await getTicketById(userId);

    // res.json(result.map(ticket=>ticket._id));
    if(result) 
    {return res.json({status: "success", result});}
  
    res.json({status: "success", message: "This user has no ticket"})

  }catch (error) {
    res.json({ status: "error", message: error.message });
  }
})

//


//:::::::::::::::::::::::UPDATE TICKET:::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::DELETE TICKET::::::::::::::::::::::::::::::::::::::
module.exports = router;
