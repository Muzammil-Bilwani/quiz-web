const bodyParser = require("body-parser")
const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: 0,
    name: "John Marry",
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  // write your code here
  res.json(
   students
  )
})

// POST student
app.post("/api/students", (req, res) => {
  // write your code here
  const name = req.body.name
  // const id = req.body.id
 let newstudents = {
      id : (students.length ),
      name : name 
 }
 
 students.push({
    id : (students.length),
    name : name
  })
  res.status(201).json(
    newstudents
)
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  // write your code here
  let id = parseInt(req.params.id)
  let name = req.body.name
  // let i = students.findIndex(e => e.id == id)
    students[id] = {
      ...students[id],
      id : id,
      name : name 
    }
    res.json(
      students[id]
)
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // write your code here
  let id = req.params.id
  let i = students.findIndex(e => e.id == id)
students.splice(i, 1)
res.json({
  message : "Student deleted successfully."
})
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  // write your code here
  let id = req.params.id
  // let i = students.findIndex(e => e.id == id)
  res.json(
    students[id]
)
})


app.listen(3000, () => {
  console.log("Server listening on port 3000")
})

module.exports = app
