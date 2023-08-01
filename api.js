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
   res.json(students);
})

// POST student
app.post("/api/students", (req, res) => {
  const { name } = req.body;
  const newStudentId = Math.max(...students.map(student => student.id)) + 1;
  const newStudent = {
    id: newStudentId,
    name: name,
  };
  students.push(newStudent);
  res.json(newStudent);
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const { name } = req.body;
  //find the students from array
  const studentIndex = students.findIndex(student => student.id === studentId);
  if (studentIndex === -1) {
    //return error when students not found
    return res.status(404).json({ message: 'Student not found' });
  }
  // Update Student Name
  students[studentIndex].name = name;
  //Return with updated student name
  res.json(students[studentIndex]);
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const studentIndex = students.findIndex(student => student.id === studentId);
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  students.splice(studentIndex, 1);
  res.json({ message: 'Student deleted successfully' });
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
})

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app
