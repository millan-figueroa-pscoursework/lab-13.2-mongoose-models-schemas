const mongoose = require("mongoose");
dotenv.config(); // loads environment variables so app can use them
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connection failed:", err.message);
    process.exit(1); // exit if fail
  }
};

module.exports = connectDB;
