const bodyParser = require("body-parser")
const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
// let students = [
//   {
//     id: 1,
//     name: "Ali",
//     marks : 453
//   },
//   {
//     id : 2,
//     name : 'Ahmed',
//     marks : 490
//   }
// ]

// GET all students
app.get("/api/students", (req, res) => {
  // write your code here
})

// POST student
app.post("/api/students", (req, res) => {
  // write your code here
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  // write your code here
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // write your code here
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  // write your code here
})


// app.listen(5000, () => {
//   console.log("Server listening on port 5000")
// })

// module.exports = app
