const express = require("express")
const router = express.Router()
const {getAllWorkouts, getOneworkout, createNewWorkout, updateOneWorkout, deleteOneWorkout} = require("../../controllers/workoutController")

console.log("im router")
router.get("/",getAllWorkouts)

router.get("/:workoutId",getOneworkout)

router.post("/",createNewWorkout)

router.patch("/:workoutId",updateOneWorkout)

router.delete("/:workoutId",deleteOneWorkout)

module.exports = router
