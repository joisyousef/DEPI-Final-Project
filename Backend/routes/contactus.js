const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple route for GET request at root "/"
app.get("/", (req, res) => {
  res.send("Welcome to the backend server. Use /api/contact to send messages.");
});

// POST route to handle form submission
app.post("/api/contact", (req, res) => {
  const { email, phone, subject, message } = req.body;

  // Basic validation
  if (!email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Here you would handle storing or sending the contact message
  console.log("Form data received:", req.body);

  // Respond with success
  res.status(200).json({ success: true, message: "Message sent successfully" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
