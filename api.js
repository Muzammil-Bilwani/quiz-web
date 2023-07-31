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
  // Write your code here
  res.json(students);
});

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Please enter a name" });
  }

  const newStudent = {
    id: students.length,
    name: name,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT student
app.put("/api/students/:id", (req, res) => {
  // Write your code here
  const idToUpdate = parseInt(req.params.id);
  const { name } = req.body;

  const studentToUpdate = students.find((student) => student.id === idToUpdate);

  if (!studentToUpdate) {
    return res.status(200).json({ message: "Student not found" });
  }

  studentToUpdate.name = name;
  res.status(200).json(studentToUpdate);
});
// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // Write your code here
  const id = req.params.id;
  const studentIndexDel = students.findIndex((s) => s.id === parseInt(id));

  if (studentIndexDel === -1) {
    res.status(200).json({ message: "Student deleted successfully." });
  } else {
    students.splice(studentIndexDel, 1);
    res.json({ message: "Student deleted successfully." });
  }
});

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
  const id = req.params.id;
  const student = students.find((s) => s.id === parseInt(id));
  if (!students) {
    res.status(404).json({ message: "Student not found" });
  } else {
    res.json(student);
  }
});

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app;
