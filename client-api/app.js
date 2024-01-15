require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

// Mongo Db Connection and Setup:

//:::::::::::::
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
if (process.env.NODE_ENV !== "production") {
  db.on("open", () => {
    console.log("Mongoose connected to the database");
  });

  db.on("error", (error) => {
    console.log(error);
  });
}

const helmet = require("helmet");

const app = express();

app.use(morgan("tiny"));

// Handles Http request Body's
app.use(bodyParser.json());
app.use(express.json());
// Allows frontend request for a specific port and block other Ports if available
app.use(cors());
// Api Security
app.use(helmet());

// :::::::::::::::::: LETS Load USER ROUTER HERE :::::::::::::::::::::::::
const userRouter = require("./src/routers/userRouter");
const ticketRouter = require("./src/routers/ticketRouters");
const errorHandler = require("./src/utils/errorHandler");
const tokenRouter=require("./src/routers/tokenRouter")

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.use("/v1/user", userRouter);
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

app.use(errorHandler);
app.use("/v1/error", (error, req, res, next) => {
  errorHandler(error, res);
});
//....................TOKEN ROUTER................................................
app.use("/v1/tokens", tokenRouter);

// :::::::::::::::::::::::::::::::::Catch-all for unmatched routes
// app.use("*", (req, res, next) => {
//   const error = new Error("Resource Not Found");
//   error.status = 404;
//   next(error);
// });
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.listen(port, () => {
  console.log(`Server is on ${port}`);
});
