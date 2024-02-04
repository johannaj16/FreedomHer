// dotenv config
require("dotenv").config();
require("express-async-errors");

// --------------------------- importing packages
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const morgan = require("morgan");

// -------------------------- Mongodb connection
const connectDB = require("./db/connect");

//-------------------------Using imports
app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); //makes json readily available as javascript object in req.body

// ---------------------- Routes
const Posts = require("./routes/postRoutes");
app.use("/api/v1/posts", Posts);
const User = require("./routes/authRoutes");
app.use("/api/v1/users", User);

// ----------------------- Error middleware
app.use(notFound);
app.use(errorHandler);

// -------------------- Server startup
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(
        `server is connected to db and is listening on port ${port}...`
      )
    );
  } catch (error) {
    console.error(error); // It's a good practice to log the error for debugging.
  }
};

start();
