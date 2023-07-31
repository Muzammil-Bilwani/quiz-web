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
    id:1,
    name: "steve"
  },

  {
    id:2,
    name: "Hobs"
  },
]

// GET all students
app.get("/api/students", (req, res) => {
  res.send({
    success: true,
    message: "Students data fetched successfully",
    data: students,
  })
})

// POST student
app.post("/api/students", (req, res) => {
  const Name = req.body.name
  if(Name){
    students.push({
      id: (students.length + 1).toString(),
      name:Name
    })
  }
  else{
   res.send({
    success: false,
    message: "validation error !!",
    error:[{
      field: "name",
      message: "field cab't be empty"
    }]
   })
  }
})

// PUT student
app.put("/api/students/:id", (req, res) => {
  const id = req.params.id
  const name = req.body.name

  if(name){
    const index = students.findIndex(el => el.id == id)
    students[index] ={
        ...students[index],
        name: name
    }
    res.send({
        success:true,
        message:"data updated successfully"
    })
}
else{  
    res.send({
        success:false,
        message: "validation error !! ",
        error :[{
            field: name,
            message: "field can't be empty"
        }]
    })
  }
})

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id
  const student = students.filter(el => el.id != id)
  students = student
  res.send({
    success: true,
    message: "Data deleted successfully"
  })
})

// GET one student
app.get("/api/students/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const student = await students.findById(id);
    res.status(200).json(students);
   } catch (error) {
    res.status(500).json({message: error.message})
   }
})

// app.listen(3000, () => {
// console.log("Server listening on port 3000")
//  })

module.exports = app
