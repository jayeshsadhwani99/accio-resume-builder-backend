// Use or get express framework
import express from "express";
import { router } from "./routes/resume.js";

// Create a new application using express
const app = express();

// Create a route/create a method - get, post, put, delete
app.get("/", (req, res) => {
  // Send the data/send my response to the frontend
  res.json({
    message: "Welcome to Resume building application",
    success: true,
  });
});

// Connect my router to my application
app.use("/resume", router);

// Start/run the application on my computer/server
// Convert my computer into a server

// port = 3000, run on this port
const port = 3001;
app.listen(port, () => {
  console.log(
    `Resume building application started on http://localhost:${port}`,
  );
});
