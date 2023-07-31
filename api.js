const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: 0,
    name: "John Marry"
  },
  {
    id: 1,
    name: "Hammad"
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  res.json(students)
})

// POST student
app.post("/api/students", (req, res) => {
  const newStudent = {
    id : students.length,
    name: "Ayan Mirza"
  }
  students.push(newStudent)

  res.json(students)
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  const update = parseInt(req.params.id)
  const student = students.find(s => s.id === update)
  student.name = "Asad"

  res.json(students)
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const update = parseInt(req.params.id)
  const student = students.find(s => s.id === update)
  // students.splice(student)
  students.pop(student)

  res.json(students)
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  const update = parseInt(req.params.id)
  const student = students.find(s => s.id === update)

  res.json(student)
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})

module.exports = app
