require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const router = require("./routes");

const app = express();

// ✅ CORS Middleware (Move Above Routes)
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));

// ✅ Body Parser Middleware (Move Above Routes)
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// ✅ Routes
app.use("/api", router); 

// ✅ Port Configuration
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});

module.exports = app;
