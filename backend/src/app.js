require("dotenv").config()
const express = require("express")
const habitRoutes = require("../routes/habits.routes")



const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("app is running")
})

app.use('/api/habits', habitRoutes)


module.exports = app