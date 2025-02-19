https://miro.com/app/board/uXjVKmMJcHs=/
# Backend-git
Backend Course with Hitesh Chaudhry

# Backend Roadmap
 2 Major Components: 

  1: A programming Language :
                        Java,C++, PHP, Golang, Javascript (on a framework)
 
  2: A Database :
             Mongo, MySQL, PostgreSQL, Sqlite (ORM, ODM)


##  A Javascript based Backend
   Data  
   File   
   Third Party (API)

  #### Javascript  Runtime's: Node.js/ Deno / Bun

   ### File Structure 

   Package.json    
   
  .env    
  
  (README, git, lint, prettier etc)

  #### src: 
    File Structure:    
           index : DB connects
           APP: config cookie, URLencode
           constants: enums, DM-name


    Directory Structure: 
           DB
           Models
           Controllers
           Routes
           Middlewares
           Utils
           More(Depends)


# How to Deploy to Production

Pura backend Nodejs pe depnedent he tu dnld karlu.

Req, res ke ana express ka kaam he.

res dia tu req di tu isse listen bol sakte hen

/ : Yeh he Home route

Yeh ju listen wala kaam he yeh express karta he

basic ju bhejte hen wu get huti he.

But aur bhu tarah ki huti hen depending uske kaam kia he basically ham get request bhejte hen.

To make a server first create a empty node application: 
 1: npm init -y
 2: Create a entry point file.
 3: To start the server make a script command, change the test to start in script in package.json and its content node index.js
 4: Make a express server.


## Route dete hue app.get() men / lagana na bhulna


Sample express code :
```

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

Download .env and make a file .env and put your sensitive data and don't push in deployment
http in node: 


# Day 3:  Express js Crash Course

 Acha ji Backend ke lie hame samajah tu agya he keh core http nodejs men aur bun se server banna scalable nhi and not a good pracitce.

 That's there are several libraries like : 
  
  1: Express.js
  
  2: Hono

  #: Elysia

  Ham abhi shuru men Express.js use karenge ge.

  Database men ham MongoDb use  kar rhe hen but ham directly mongodb code nhi likhenge uske lie ham ORM use karnege ge. ORM means  Object Relational Mapping.
  There are many ORM,s like: 
  
  1: Mongoose

  2: Prisma

  3: Drizzle

  We are using mongoose for mongodb, we can use drizzle and prisma for postgreSQL.



  All the web request will come to express application that runs in the node environment, in that we will be writing all the auth and business logic.

  Acha ji ap jab express server men kuch change karen tu apku server restart karna parta usse bachne ke lie pa nodemon use kar sakte hen :
  ```
npm i -D nodemon
  ```

  -D means dev Dev Dependency, it does not get pushed to production cos why would we want to increase the laod we only need it in development.
  
  You can make a run command called dev which represent nodemon index.js

  ## Basic CRUD application 

  ```
  app.use(express.json())
  
  let teaData = []
  let nextId = 1
 // Add a new Tea
   app.post("/teas", (req,res) => {
   const {name,price} = req.body;

   const newTea = {id: nextId++, name,price}
   teaData.push(newTea)
   res.status(201).send(newTea)
   })
// Get al tea
   app.get("/teas", (req,res) => {
    res.status(200).send(teaData)
   })
// Geta tea with id
   app.get("/teas/:id", (req, res) => {
  const tea =  teaData.find(t => t.id = parseInt(req.params.id))

  if(!tea) {
    return res.status(404).send('Tea Not Found)
  }

  res.status(200).send(tea)
   })

  //Update Tea

  app.put("/teas/:id", (req,res) => {
  const teaId =  req.params.id
   const tea =  teaData.find(t => t.id = parseInt(req.params.id))

    if(!tea) {
    return res.status(404).send('Tea Not Found)
  }

  const {name, price} = req.body
  tea.name = name
  tea.price = price
  res.send(200).send(tea)
  } )


 // Delete Tea

 app.delete("/teas/:id", (req,res) => {
 const index = teaData.findIndex(t => t.id === ParseInt(req.params.id))

 if(index === -1){
  return res.send(404).send("tea not found)
 }

 teaData.splice(index, 1)
  return res.send(204).send("deleted")
 }) 
  ```


  # Data Modelling with mognoose

  Always when starting to make backend, first create a data model, what fields you need how they are related etc.

  also first start with a page that submits data(Registeration) rather than a page that validates it(login)

  Install npm i mongoose

  ### Creating Models: 
   
   Lets's create a model folder and in that folder name "todos" and we will define our characters in it.

   First charatcer can be user named user.models.js(it is a simple js file but it is a standard industry pracitce). 

   And a todo.models.js

   and another sub_todo.models.js.

  Step 1:
   
   Import mongoose

   Step 2: 

   Mongoose help create schema.

   const userSchema = new mongoose.Schema(
    {
      username: {
         type: String,
        required: true,
        unique :true,
        lowercase: true
         },
      email: String,
      isActive: Boolean
    },
     email : {
      type: String,
       required: true,
       unique: true,
       lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },{
      timestamps: true,
    }
    )

   Step 3: 

   export const User = mongoose.model("User", userSchema)

   
  ## In todo model(pracitce )

  ```
  import mongoose from "mongoose"

  const todoSchema = new mongoose.Schema({
    content: {
      type: String,
      required :true,
    },

    complete : {
      type : Boolean,
      default : false,
    },
    createdBy : {
       type : mongoose.Schema.Types.ObjectId,
       ref: "User",
    },

    subTodos :  [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ] // Array of Sub Todos
  }, {timestamps: ture})

 export const Todo = mongoose.model("Todo", todoSchema)

  ```


  ## In sub todos 

  ```
 import mongoose from "mongoose"

 const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete :{
    type: Boolean,
    default :false,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

 }, {timestamps: true})

 export const SubTodo = mongoose.model("SubTodo", subTodoSchema)

  ```


 VideoTube model link : https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
 
  
Git doesnot track folders so we create a .gitkeep file in the empty folder to be tracked.

Also .gitignore file to keep files that have sensitive data.


# How to connect Database in MERN with debugging:

 Install MongoDb(optional)

 Open MongoDB Atlas.

 Create a new project.

 Create a cluster or deployment.

 * Add 0.0.0.0/0 in IP address.

In env folder create PORT value 8000, MONGODB_URI(DON'T add Ending Slash).

In consatnts export DB_NAME: 

```
export const DB_NAME = "videotube"
```

Install dotenv, mongoose, express.

Always wrap database call in a try catch or use promise for error handling.

Database is always in another continent so it takes time so use async await.


In src folder in db folder create a index.js file: 

```
import mongoose from "mongoose"
import {DB_NAME} from "../constants"

const connectDB = async () => {
  try{
  const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}')
    console.log(`MongoDB Connected: DB HOST: ${connectInstance.connection.host}`)
  

  }catch(err) {
    console.log("connection error", err);
    process.exit(1)
  }
}

export default connectDB
```


In main index.js: 

```
// require('dotenv').config({path: './env'}) 
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
  path: "./env"
})


connectDB()
```
As import is a new feature and experimental inn package.json, in the dev script add -r dotenv/config --experimental-json-modules

.use moslty use tak karenge jab middleware yah kui configuration karni he


When using pre hook (save) in mongoose, don't use arrow function because arrow function doesnot have this access..Ref : user model

When using the pre hook, it will encrypt the password everytime when anything is saved or changed so we use isModified method and in it pass the name of the field we want to watch in a STRING.

```

userSchema.pre("save",async function(next) {
 if(!this.isModified("password")) return next();
 
  this.password = bcrypt.hash(this.password, 10)

  next()
})
```

# HTTP 

 - Hyper Text Transfer Protocol

 ### HTTP Headers: 

 - Meta Data : Key-value pair sent along with request & response

 Usage - caching, authentication, manage state etc.....

   1. Request Headers - from client
   2. Response Headers - from Server
   3. Representation Headers - encoding/compression
   4. Payload Headers - data
     

  #### Most Common Headers
  - Accept  : Application/json
  - User-agent
  - Authorization
  - Content-Type
  - Cookie
  - Cache - Control

#### CORS
Acces-Control-Allow-Origin

Access-Control-Allow-Credentials

Acess-Control-Allow-Method

#### Security
Cross-Origin-Embedder-Policy

Cross-Origin-Opener-Policy

Content-Security-Policy

X-XSS-Protection


### HTTP Methods

Basic set of operations that can be used to interact with server

- Get : Retrieve a response
- Head : No message body(response headers only)
- Options : What operations are available
- Trace : Loopback Test(get same data)
- Delete : Remove a resource
- Put  : Replace a resource
- Post : Interact with resource (mostly add)
- Patch : change part of a resource
 

## HTTP Status Code

- 1xx - Informational
- 2xx - Success
- 3xx - Redirection
- 4xx - Client error
- 5xx - Server error


100 - Continue

102- Processing

200 - OK

201 - Created

202 - Accepted 

307 - Temporary Redirect

308 -  Permanent Redirect 

400 - Bad Request

401 - Unauthorized

402 - Payment Required

404 - Not Found

500 - Internal Server Error

504 - Gateway Timeout

# Guide for Router and Controller

Following is How you create routes: 

```
import {Router} from "express"

const router = Router()

export default router
```
