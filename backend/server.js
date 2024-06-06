// port
require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;
const workoutRoutes = require("./routes/workouts.js");

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// workout routes
app.use("/api/workouts", workoutRoutes);

app.listen(port, () => {
  console.log("app is listening on port ", port);
});
