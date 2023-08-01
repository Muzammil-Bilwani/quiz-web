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
  const { name } = req.body;

  // Error handling for missing data
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  // Generate a unique ID for the new student (In a real app, you may use a database auto-increment ID)
  const newStudentId = students.length;

  // Create a new student object
  const newStudent = { id: newStudentId, name };

  // Add the new student to the array
  students.push(newStudent);

  // Respond with the new student data
  res.status(201).json(newStudent);
});

// PUT student
app.put("/api/students/:id", (req, res) => {
  const studentId = req.params.id;

  // Find the index of the student with the given ID in the 'students' array
  const studentIndex = students.findIndex((student) => student.id === studentId);

  // Check if the student with the given ID exists
  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  // Assuming the client sends JSON data in the request body with a key: "name"
  const { name } = req.body;
 // Error handling for missing data
 if (!name) {
  return res.status(400).json({ error: 'Name is required.' });
}

// Update the student's information
students[studentIndex].name = name;

// Respond with the updated student data
res.json(students[studentIndex]);
});

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const studentId = req.params.id;

  // Find the index of the student with the given ID in the 'students' array
  const studentIndex = students.findIndex((student) => student.id === studentId);

  // Check if the student with the given ID exists
  if (studentIndex === -1) {
    return res.status(200).json({ error: 'Student not found.' });
  }

  // Remove the student from the array
  students.splice(studentIndex, 1);

  // Respond with a success message
  res.json({ message: 'Student removed successfully.' });
});

// GET one student
app.get("/api/students/:id", (req, res) => {
  const studentId = req.params.id;

  // Find the student with the given ID in the 'students' array
  const student = students.find((student) => student.id === studentId);

  // Check if the student with the given ID exists
  if (!student) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  // Respond with the student's information
  res.json(student);
});

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app
