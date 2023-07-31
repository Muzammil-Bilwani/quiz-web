const express = require("express");
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: 0,
    name: "John Marry",
  },
];

// GET all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// POST student
app.post("/api/students", (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ message: "invalid input" });
  }
  const id = students.length;
  const newStudent = { id, name };
  students.push(newStudent);
  return res.status(201).json(newStudent);
});

// PUT student
app.put("/api/students/:id", (req, res) => {
  // Write your code here
});

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // Write your code here
});

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
});

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app;
