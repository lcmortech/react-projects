const express = require('express')
const app = express()

//req => middleware => response

// app.get('/',(req, res)=>{
//    const method = req.method
//    const url = req.url
//    const time = new Date().getFullYear
//    console.log(method, url, time)
//    res.send('Home')
// })

//middleware function
const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req, res)=>{
    res.send('Home')
})


app.listen(5000,()=>{
    console.log('Server listening on port 5000....')
})