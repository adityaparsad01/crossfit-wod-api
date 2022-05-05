const workoutService = require("../services/workoutService")


const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts
  console.log("im controller")
  res.send({ status: "ok", data: allWorkouts })
}

const getOneworkout = (req, res) => {
  const workout = workoutService.getOneworkout
  res.send("Get an existing workout")
}

const createNewWorkout = (req, res) => {
  const createWorkout = workoutService.createNewWorkout
  res.send("Create a new Workout")
}

const updateOneWorkout = (req, res) => {
  const updateWorkout = workoutService.updateOneWorkout
  res.send("Update an existing workout")
}

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout()
  res.send("Delete an existing workout")
}
module.exports = {
  getAllWorkouts, getOneworkout, createNewWorkout, updateOneWorkout, deleteOneWorkout
}
