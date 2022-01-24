const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//req => middleware => response
app.use([logger, authorize]) 
//auto invokes middleware for EVERY route
//order matters, use must be at the top of the document, or else the get
//requests will be invoked first
//paths can be added: app.use('/api', logger)
//applying the path applies to every route following the api

// app.get('/',(req, res)=>{
//    const method = req.method
//    const url = req.url
//    const time = new Date().getFullYear
//    console.log(method, url, time)
//    res.send('Home')
// })

//middleware function
//const logger = (req,res,next) =>{
//    const method = req.method
//    const url = req.url
//    const time = new Date().getFullYear
//    console.log(method, url, time)
//    next()
//}

app.get('/', logger, (req, res)=>{
    res.send('Home')
})

app.get('/about', logger, (req, res)=>{
    res.send('About')
})

app.get('/api/products',logger, (req, res)=>{
    res.send('Products')
})

app.get('/api/items',logger,(req, res)=>{
    res.send('Items')
})


app.listen(5000,()=>{
    console.log('Server listening on port 5000....')
})