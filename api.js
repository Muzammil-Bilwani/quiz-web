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
    name: "Karim"
  },
  {
    id: 2,
    name: "husnain"
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  // Write your code here
  res.json(students);

});

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here

  if(!req.body.name){
    res.send({message: "Please enter name"})
    return
  }
  let newId = students.length
  let newStudent = Object.assign({id: newId}, req.body)
  students.push(newStudent)
  res.status(201).json(newStudent)
})






// PUT student


  app.put("/api/students/:id", (req, res) => {
    // write your code here
    let student = students.find((std)=>std.id == req.params.id)
  if(!student || !req.body.name){
    res.status(400).send({message: "bad request"})
    return
  }
  student.name = req.body.name
  let updatedStudent = {id: student.id, name: student.name}
  res.status(200).json(updatedStudent)
})

// DELETE student

  app.delete("/api/students/:id", (req, res) => {
    // write your code here
    let id = req.params.id
    let i = students.findIndex(e => e.id == id)
  students.splice(i, 1)
  res.json({
    message : "Student deleted successfully."
  })
  })


// GET one student
app.get("/api/students/:id", (req, res) => {
  // write your code here
  let id = req.params.id
  let i = students.findIndex(e => e.id == id)
  res.json(
    students[id]
)
})




// app.listen(3000, () => {
//   console.log("Server listening on port 3000")
// })

module.exports = app
