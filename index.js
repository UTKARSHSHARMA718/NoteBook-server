require('dotenv').config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

// Connecting to Database
connectToMongo();

const app = express();
// const port = 5000;

// To use cors
app.use(cors());

// To use json bodies
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./Routes/auth.js"));
app.use("/api/notes", require("./Routes/notes.js"));

// Listening
// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Example app listening at http://localhost:${process.env.PORT}`);
// });
app.get('/',(req,res) =>{
  res.status(200).send("Hello World")
})
app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 5000}`);
});
