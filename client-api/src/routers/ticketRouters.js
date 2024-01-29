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
//.........................Ready Ticket By user...............................
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

  console.log("status from status route:", req.body.status);
  try {
    const result = await getTicketbyStatus(status, department);

    res.json({ message: "You are in status Route", result });
  } catch (error) {
    res.status(200).json({ message: "There is not open TT exist", error });
  }
});
//...........Fetch for specific user by userId (Using Req.Params) ...........


//:::::::::::::::::::::::UPDATE TICKET:::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::DELETE TICKET::::::::::::::::::::::::::::::::::::::
module.exports = router;
