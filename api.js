const { uuid } = require('uuidv4');
const express = require("express")
const app = express()
const PORT=5000;
// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: uuid(),
    name: "Ali Ahmed"
  },
  {
    id: uuid(),
    name: "Ahmed Ali"
  },
  {
    id: uuid(),
    name: "Ali"
  },
  {
    id: uuid(),
    name: "Ahmed"
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  // Write your code here
  res.send(students)
})

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here
  let student=req.body;
  students.push({...student,id:uuid()})
  res.send(`Student with name ${student.name} is added to the database.`)
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  // Write your code here
  const {id}=req.params;
  const {name}=req.body;
  let student=students.find(student=>student.id===id);
  if (!student) {
    res.send("Student not found")
  }
  else{
    student.name=name;
    res.send(student);
  }
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // Write your code here
  const {id} =req.params;
  studentsAfterDeletion = students.filter(student=>student.id!==id);
  res.send(`Student with id: ${id} is deleted from the database.`)
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
  const {id}=req.params;
  let foundStudent =students.find(student=>student.id===id)
  res.send(foundStudent)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: http://localhost:${PORT}`)
})

module.exports = app
// "test": "jest api.test.js"