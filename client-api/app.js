require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

// Mongo Db Connection and Setup:

//:::::::::::::
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and connection errors
if (process.env.NODE_ENV !== "production") {
  db.on("open", () => {
    console.log("Mongoose connected to the database");
  });

  db.on("error", (error) => {
    console.log(error);
  });
  //logger
}

// });

// mongoose.on("open",()=>{
//   console.log("opened");
// })

const helmet = require("helmet");

const app = express();

app.use(morgan("tiny"));

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

// :::::::::::::::::: LETS Load USER ROUTER HERE :::::::::::::::::::::::::
const userRouter = require("./src/routers/userRouter");
const ticketRouter = require("./src/routers/ticketRouters");
const errorHandler = require("./src/utils/errorHandler");

// Use User's Router
app.use("/v1/user", userRouter);

// Handle undefined variable 'name'
app.use(
  "/v1/ticket",
  (req, res, next) => {
    if (typeof req.query.name === "undefined") {
      const error = new Error("Query parameter 'name' is undefined");
      error.status = 400; // Bad Request
      errorHandler(error, res);
    } else {
      next();
    }
  },
  ticketRouter
);

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
