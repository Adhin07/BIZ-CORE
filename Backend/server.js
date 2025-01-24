const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // To parse JSON body requests
app.use(cors()); // To enable CORS for frontend communication

// Basic Route
app.get("/", (req, res) => {
  res.send("Express Server is running!");
});

// Port Configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
