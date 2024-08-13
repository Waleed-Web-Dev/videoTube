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
