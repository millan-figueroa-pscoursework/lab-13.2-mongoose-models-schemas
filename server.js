require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// middlewarez
app.use(express.json());

// connect to mongo
connectDB();

// test route
app.get("/", (req, res) => {
  res.json({ message: "Connected to the Digital Bookshelf API" });
});

// mounts book routes
app.use("/api/books", bookRoutes);

// port
const PORT = process.env.PORT || 3001;

// strt server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
