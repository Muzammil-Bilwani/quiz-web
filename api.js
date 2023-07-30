const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: 0,
    name: "John Marry"
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  res.json(students)
})

// POST student
app.post("/api/students", (req, res) => {
  const newStudent = {
    id: 1,
    name: "Mohib"
  }
  students.push(newStudent)
  res.json(students)
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === 1)
  student.name = "mujeeb"
  res.json(students)
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  students = students.splice(s => s.id === 1)
  res.json(students)
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === 0)
  res.json(student)
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})

module.exports = app