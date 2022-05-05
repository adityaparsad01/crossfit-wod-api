const express = require("express")

//added V1 router
const v1WorkoutRouters = require("./src/v1/routes/workoutRouters")

const app = express()
const port = process.env.port || 3000

app.get("/",(req,res)=>{
  res.send("<h2> Its Working</h2>")
})

app.use("/api/v1/workouts",v1WorkoutRouters)

app.listen(port,()=>{
  console.log(`im listening at ${port}`)
})

//console.log(v1Router)