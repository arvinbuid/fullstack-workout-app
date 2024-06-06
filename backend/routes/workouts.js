const express = require("express");
const router = express.Router();

// schema
const Workout = require("../models/workoutModel.js");

// GET all workouts
router.get("/", (req, res) => {
  res.json({message: "get all workouts route."});
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({message: "get single workout route."});
});

// POST new workout
router.post("/", async (req, res) => {
  const {title, reps, load} = req.body;

  try {
    const workout = await Workout.create({title, reps, load});

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
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
