
const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/iNoteBook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// const mongoURI = "mongodb+srv://utkarsh4747:47magicDB48@cluster0.o8vvq.mongodb.net/iNoteBook";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database connected!!!");
  });
};

module.exports = connectToMongo;
