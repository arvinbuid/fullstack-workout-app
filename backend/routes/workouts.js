const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({message: "get all workouts route."});
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({message: "get single workout route."});
});

// POST new workout
router.post("/", (req, res) => {
  res.json({message: "create workout route."});
});

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({message: "delete single workout route"});
});

// PATCH update workout
router.patch("/:id", (req, res) => {
  res.json({message: "update single workout"});
});

module.exports = router;
