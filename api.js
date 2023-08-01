const express = require("express");
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// Sample data - replace this with an actual database or data storage
let students = [
  { "id": 0, "name": "John Marry" },
  { "id": 1, "name": "Marry" },
];

// GET all students
app.get("/api/students", (req, res) => {
  res.json(students);
});


// POST student
app.post("/api/students", (req, res) => {
  const { id, name } = req.body;
  const newStudent = { id, name };
  const existingStudent = students.find((student) => student.id === newStudent.id);

  if (!existingStudent) {
    return res.json({ message: "Student with the same id exists" });
  } else {
    students.push(newStudent);
    return res.status(201).json(newStudent);
  }
});


// PUT student
app.put("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const updateStudent = students.find((student) => student.id === parseInt(id));

  if (!updateStudent) {
    res.status(200).json({ message: "Student not found" })
  }
  else {
    updateStudent.name = name;
    return res.json(updateStudent);
  }
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const studentIdToBeExpelled = parseInt(req.params.id);
  const expelledStudentIndex = students.findIndex((student) => student.id == studentIdToBeExpelled)
 
students.splice(expelledStudentIndex, 1);
res.json({ message: "Student deleted successfully." });

});



// GET one student
app.get("/api/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const singleStudent = students.find((student) => student.id == studentId);

  if (!singleStudent) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(singleStudent);
});


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = app;
