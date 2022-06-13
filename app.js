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
