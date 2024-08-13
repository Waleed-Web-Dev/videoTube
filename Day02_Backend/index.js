import express from "express"

const app = express()

const port = 3000;
app.use(express.json)

let familyName = []
let id = 1;

// Putting a name

app.post("/names", (req,res) => {
  let {name, age} = req.body

  let namePushed = {"id": id++, name,age};
  familyName.push(namePushed)
  res.status(201).send(namePushed)
})


// Getting Family Name 

app.get("/names", (req,res) => {
  res.status(200).send(familyName)
})

// Get name with id
app.get("/names/:id", (req,res) => {
  let name = familyName.find(t => t.id === parseInt(req.params.id))

  if(!name){
    res.status(404).send("Name not Found")
  }

  res.status(200).send(name)
})

// Update 

app.put("/names/:id", (req,res) => {
  let GivenName = familyName.find(t => t.id === parseInt(req.params.id));
  
  if(!GivenName){
    res.status(404).send("Name not Found")
  }
  
  const {name, age} = req.body;
  GivenName.name = name;
  GivenName.age = age;

  res.status(200).send(GivenName)

})

// Delete 

app.delete("/teas/:id", (req, res) => {
  const name = familyName.findIndex(t => t.id === parseInt(req.params.id))

  if(!name){
    res.status(404).send("Name not found")
  }

  familyName.splice(name, 1);
  res.status(200).send(familyName)
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}.....`);
  
})