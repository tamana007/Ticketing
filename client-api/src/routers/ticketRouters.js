const express = require("express");
const {
  userAuthorization,
  adminAuthorization,
} = require("../middlewares/authorization");
const router = express.Router();
const {
  createticket,
  getAllTickets,
  getTicketById,
  getTicketbyDept,
  getTicketbyStatus,
  fetchbyParam,
} = require("./model/ticket/createTicket/createTicketModel");

const {
  addTicket,
  readTT,
  updateTT,
  deleteTT,
} = require("./model/ticket/ticket/ticketModel");

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
    status,
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
    status,
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
//.........................Read Ticket By user...............................
router.get("/ticketCreator", adminAuthorization, async (req, res) => {
  try {
    const userId = req.id;
    const result = await getTicketById(userId);
    if (result) console.log("log result", result);
    {
      return res.json({ status: "success", result });
    }
    res.json({ status: "success", message: "This user has no ticket" });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//......................Read Ticket by Department.........
router.get("/departmentTickets", async (req, res) => {
  try {
    const department = req.body.department;
    const fetchDept = await getTicketbyDept(department);
    if (!fetchDept || fetchDept.length === 0) {
      res.status(200).json({ message: "This department has no tickets" });
    } else {
      res.json({ message: "Fetched department Tickets", fetchDept });
    }
  } catch (err) {
    res.json({ message: "issue", err });
  }
});
//........Fetch by status...............
router.get("/fetchbyStatus", adminAuthorization, async (req, res, next) => {
  const status = req.body.status;
  const department = req.body.department;

  // console.log("status from status route:", req.body.status);
  try {
    const result = await getTicketbyStatus(status, department);

    res.json({ message: "You are in status Route", result });
  } catch (error) {
    res.status(200).json({ message: "There is not open TT exist", error });
  }
});

//.......Fetch for specific user by userId (Using Req.Params) ...........
router.get("/fetchbyId/:userId", async (req, res, next) => {
  try {
    const mid = req.params.userId; // Use req.params.userId directly
    const getbyPara = await fetchbyParam(mid);

    if (getbyPara) return res.json({ status: "success", getbyPara });
    res.json({
      status: "success",
      message: "This specific ticket is not in the user's list.",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//.....................ADD TT for my system............
router.post("/addTT", async (req, res, nex) => {
  try {
    // console.log('add ticket------',addTicket);
    const { subject, status, openedAt, conversation } = req.body;
    const ticketInfo = {
      subject,
      status,
      openedAt,
      conversation,
    };
    const result = await addTicket(ticketInfo);
    console.log("result for my ticket", result);
    res.json({ message: "done", result });
  } catch (error) {
    res.json({ message: "err", error });
  }
});

//........Get Tickets.......................
router.get("/readTT", async (req, res, next) => {
  const mystatus = req.body.stastus;

  console.log("Status", mystatus);

  const getTT = await readTT(mystatus);
  res.json({ message: "success", getTT });
  console.log("Get TT", getTT);
});
//Get TT by ID//


//:::::::::::::::::::::::UPDATE TICKET:::::::::::::::::::::::::::::::::::::::

//UPDATE TT Route
router.put("/:id/:conversationIndex", async (req, res, next) => {
  try {
    const mid = req.params.id;
    const conversationIndex = req.params.conversationIndex;
    const message = req.body.message;
    const status = req.body.status;

    const result = await updateTT(mid, conversationIndex, message, status);

    if (result) {
      console.log("status", status);
      res.json({ status: "success", result });
    } else {
      res.json({
        status: "success",
        message: "This specific ticket is not in the user's list.",
      });
    }
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});


//::::::::::::::::::::::::DELETE TICKET::::::::::::::::::::::::::::::::::::::
router.delete('/deleteTT',async(req,res,next)=>{
  try {
    const TTid=req.body.id;
  console.log('TTid',TTid);
  res.json({message:"tt  dleed",TTid})
  const deleteTT=await deleteTT(TTid)
  } catch (error) {
    res.status(200).json({message:'issue occured'})
  }
  


})
module.exports = router;
