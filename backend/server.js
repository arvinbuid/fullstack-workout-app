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

// middleware
app.use(express.json());
app.use(cors());
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
