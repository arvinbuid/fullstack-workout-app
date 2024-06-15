// port
require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 4000;
const workoutRoutes = require("./routes/workouts.js");
const userRoutes = require("./routes/user.js");
const mongoose = require("mongoose");
const cors = require("cors");

// express app
const app = express();

// Configure CORS options
const corsOptions = {
  origin: "https://mern-workout-app-navy.vercel.app", // replace with your Vercel domain
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST, DELETE", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to mongodb and app is listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
