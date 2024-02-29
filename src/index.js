// Use or get express framework
import express from "express";
import { router } from "./routes/resume.js";
import ExpressError from "./utils/ExpressError.js";
import morgan from "morgan";

// Create a new application using express
const app = express();

// So that we can accept
// data from the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("combined"));

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

// * -> all
// before responding from all applications
// we check this
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).json({ err });
});

// Start/run the application on my computer/server
// Convert my computer into a server

// port = 3000, run on this port
const port = 3001;
app.listen(port, () => {
  console.log(
    `Resume building application started on http://localhost:${port}`,
  );
});
