const workout = require("../database/Workout")

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts
  console.log("im services")
  return allWorkouts
}

const getOneworkout = () => {
  return
}

const createNewWorkout = () => {
  return
}

const updateOneWorkout = () => {
  return
}

const deleteOneWorkout = () => {
  return
}

module.exports = {
  getAllWorkouts, getOneworkout, createNewWorkout, updateOneWorkout, deleteOneWorkout
}