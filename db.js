require('dotenv').config();
const mongoose = require("mongoose");


const connectToMongo = () => {
  mongoose.connect(process.env.mongoURI, () => {
    console.log("Database connected!!!");
  });
};

module.exports = connectToMongo;

// const mongoURI =
//   "mongodb://localhost:27017/iNoteBook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";