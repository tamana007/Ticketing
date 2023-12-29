
const env=require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
// Handles Http request Body's
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// Handle Cors error;
// Allows frontend request for a specific port and block other Ports if available
app.use(cors());

// Api Security
app.use(helmet());

// Logger
app.use(morgan("tiny"));

const port = process.env.PORT || 5000;

// :::::::::::::::::: LETS Load USER ROUTER HERE :::::::::::::::::::::::::
const userRouter = require("./src/routers/userRouter");
const ticketRouter = require("./src/routers/ticketRouters");
const errorHandler = require("./src/utils/errorHandler");

// Use User's Router
app.use("/v1/user", userRouter);

// Handle undefined variable 'name'
app.use("/v1/ticket", (req, res, next) => {
  if (typeof name === "undefined") {
    const error = new Error("Variable 'name' is undefined");
    error.status = 400; // Bad Request
    errorHandler(error, res);
  } else {
    next();
  }
}, ticketRouter);

app.use("/v1/error", errorHandler);

// Catch-all for unmatched routes
app.use("*", (req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
});

// Error Handling Middleware
app.use(errorHandler);

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.listen(port, () => {
  console.log(`Server is on ${port}`);
});

