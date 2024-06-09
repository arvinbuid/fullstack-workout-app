const Workout = require("../models/workoutModel.js");
const mongoose = require("mongoose");

// get all workouts
const getAllWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({createdAt: -1});

  res.status(200).json(workout);
};

// get single workout
const getWorkout = async (req, res) => {
  const {id} = req.params;

  // check if id is valid collection id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such workout exists."});
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(400).json({error: "no such workout exists."});
  } else {
    res.status(200).json(workout);
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const {title, reps, load} = req.body;

  let emptyInputFields = [];

  // check if any form input field is empty
  if (!title) {
    emptyInputFields.push("title");
  }
  if (!reps) {
    emptyInputFields.push("reps");
  }
  if (!load) {
    emptyInputFields.push("load");
  }

  if (emptyInputFields.length > 0) {
    return res.status(400).json({error: "Please fill out all the input fields.", emptyInputFields});
  }

  try {
    const workout = await Workout.create({title, reps, load});

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const {id} = req.params;

  // check if id is valid collection id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such workout exists."});
  }

  const workout = await Workout.findOneAndDelete({_id: id});

  if (!workout) {
    return res.status(400).json({error: "no such workout exists, cannot perform delete."});
  }
  res.status(200).json(workout);
};
// update workout
const updateWorkout = async (req, res) => {
  const {id} = req.params;

  // check if id is valid collection id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such workout exists."});
  }

  const workout = await Workout.findOneAndUpdate(
    {_id: id},
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({error: "no such workout exists, cannot perform update."});
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
