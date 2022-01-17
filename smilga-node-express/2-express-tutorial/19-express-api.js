const express = require('express')
const app = express()

//GET
app.get('/',(req, res) =>{
    res.json([{"name": "john"},{"name": "susan"}])
})


app.listen(5000, ()=>{
    console.log('Server up and running on port 5000...')
})