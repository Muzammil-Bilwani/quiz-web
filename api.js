const express = require("express")
const app = express()

// Middleware to parse request body as JSON
app.use(express.json())

// Sample data - replace this with an actual database or data storage
const students = [
  {
    id: 0,
    name: "John Marry"
  }
 ]


// GET all students
app.get("/api/students", (req, res) => {
  // Write your code here
  res.status(200)
  res.json({
    data:  [
      students]
  })
})

// POST student
app.post("/api/students", (req, res) => {
  // Write your code here
    if(!req.body.name){
    res.status(400)
    return res.json({Error: "Please enter name"})
  }
  else{
  let newstudent = {
    id: students.length + 1,
    name: req.body.name,
  }  
  students.push(newstudent);
  res.json(newstudent);  
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
    let id = req.params.id;
    let index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })    
    if(index >= 0){
        let std = students[index]
        students.splice(index, 1)
        res.json({message: 'Successfully deleted'})
    }
    else{
        res.status(404)
    }
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
