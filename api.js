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
  // Write your code here
  res.json(students);
})

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here
  const { name } = req.body;
  const id = students.length;
  const newStudent = { id, name };
  students.push(newStudent);
  res.status(201).json(newStudent);
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  // Write your code here
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const studentToUpdate = students.find((student) => student.id === id);

  if (!studentToUpdate) {
    return res.status(404).json({ message: "Student not found" });
  }
  studentToUpdate.name = name;
  res.json(studentToUpdate);
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // Write your code here
  const id = parseInt(req.params.id);

  const studentIndex = students.findIndex((student) => student.id === id);

  students.splice(studentIndex, 1);
  res.json({ message: "Student deleted successfully." });
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
})

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app
