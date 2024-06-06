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

app.listen(4000, () => {
  console.log("app is listening on port 4000.");
});
