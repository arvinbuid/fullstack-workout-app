// port
require("dotenv").config();

const express = require("express");

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({
    name: "workout app",
    message: "Hello Arvin, welcome to the application.",
  });
});

app.listen(process.env.PORT, () => {
  console.log("app is listening on port ", process.env.PORT);
});
