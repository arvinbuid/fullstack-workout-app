// port
require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;
const workoutRoutes = require("./routes/workouts.js");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to mongodb and app is listening on port ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// workout routes
app.use("/api/workouts", workoutRoutes);
