// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoute"); // Adjust this path if needed

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Enable CORS

// Routes
app.use("/users", userRoutes);

// MongoDB connection
const MONGODB_URI = "mongodb+srv://sandy:Ehqk1YWBdWBGDKmf@cluster0.bctfbpk.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(5000, () => {
    console.log("🚀 Server started on http://localhost:5000");
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
