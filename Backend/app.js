require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const Posts = require("./routes/route");
const connectDB = require("./db/connect");

app.use(cors());
app.use("/api/v1/posts", Posts);
const port = process.env.PORT || 4000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, console.log(`server is connected to db and is listening on port ${port}...`));
    } catch (error) {
      console.error(error); // It's a good practice to log the error for debugging.
    }
};
  
start();