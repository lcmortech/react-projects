const express = require('express')
const app = express()
const { products } = require('./data')
//GET
app.get('/',(req, res) =>{
    res.json(products)
})


app.listen(5000, ()=>{
    console.log('Server up and running on port 5000...')
})