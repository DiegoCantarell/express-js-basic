//Using an object of express
const express = require('express')
//Express app
const app = express()
//The port where we are going to see our app: localhost:3000
const port = 3000

//initial path, it will answer to url localhost: 3000
app.get('/', (req,res)=> {
    res.send('Hello World!')
})

//With this we initialize the app
app.listen(port,() =>{
    console.log(`Example app listening on port ${port} `)
})

//Answering text
//localhost:3000/Welcome to the Main Page
app.get('/main',(req,res) => {
    console.log("Answering...")
    res.send('Welcome to the Main Page')
})
//Return an object
//localhost: 3000/objectInNode
app.get('/objectInNode',(req,res) => {
    const object = {name: "Object1",msg: "Test1"}
    res.send(object)
})
