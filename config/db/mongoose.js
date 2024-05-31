require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Successfully connected to MongoDB Atlas");
});
module.exports = { mongoose };
