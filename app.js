const bodyParser = require("body-parser")
const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
let students = [
  {
    id: 1,
    name: "Ali",
    marks : 453
  },
  {
    id : 2,
    name : 'Ahmed',
    marks : 490
  }
]

// GET all students
app.get("/api/students", (req, res) => {
  res.json({
    success : true,
    data : students
  })
})

// POST student
app.post("/api/students", (req, res) => {
  const name = req.body.name
  const marks = req.body.marks
  if(name){
    students.push({
      id : (students.length + 1).toString(),
      name : name,
      marks : marks||0
    })
    res.json({
      success : true,
      message : "data added successfuly"
    })
  }
  else{
    res.json({
      success : false,
      errors : "name cannot be null"
    })
   
  }
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  let id = req.params.id
  let name = req.body.name
  let marks = req.body.marks
  if(name||marks){
    let i = students.findIndex(e => e.id == id)
    students[i] = {
      ...students[i],
      name : name || students[i].name,
      marks: marks || students[i].marks
    }
    res.json({
      success : true,
      message : "data updated successfuly"
    })
  }
  else{
    res.json({
      success : false,
      errors : "data cannot be null"
    })
   
  }
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  let id = req.params.id
  let i = students.findIndex(e => e.id == id)
students.splice(i, 1)
res.json({
      success : true,
      message : "data deleted successfuly"
    })
})

// GET one student
app.get("/api/students/:id", (req, res) => {
  let id = req.params.id
  let i = students.findIndex(e => e.id == id)
  res.json({
    success : true,
    data : students[i]
  })
})


app.listen(5000, () => {
  console.log("Server listening on port 5000")
})

module.exports = app
