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
    res.json(students)
})

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here
  if(!req.body.name){
    return res.status(400).json({Error: "Please enter name"})
  }else{
  const newstudent = {
    id: students.length,
    name: req.body.name
  }  
  students.push(newstudent);
  return res.status(201).json(newstudent);  
  }
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  // Write your code here
  let id = req.params.id
  let name = req.body.name;
  
  let index = students.findIndex((student) => {
      return (student.id == Number.parseInt(id))
  })

  if(index >= 0){
      let std = students[index]
      std.name = name
      res.json(std)
  } 
  else {
      res.status(404)
  }
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  // Write your code here
    const id = req.params.id;
    const stdindex = students.findIndex((student) => 
        student.id === Number.parseInt(id))    
    if (stdindex === -1) {
      return res.status(404).json({ message: "Student not found" })
    }
      students.splice(stdindex, 1)
      return res.json({ message: "Student deleted successfully." })
  })

// GET one student
app.get("/api/students/:id", (req, res) => {
  // Write your code here
  let id = req.params.id;
  let index = students.findIndex((student) => { 
  return (student.id === Number.parseInt(id))
  })
  if(index >= 0){
      let std = students[index]
      res.json(std)
  }
  else{
      res.status(404)
  }
})

// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app
