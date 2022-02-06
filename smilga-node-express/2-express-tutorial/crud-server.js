const express = require('express')
const app = express()
let {people} = require('./data')

//remember app.use applies middleware to all our routes, and can also serve up a public/statis folder
//static assets
app.use(express.static('.methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.post('/login',(req, res)=>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    } 

    res.status(401).send('Please Provide Credentials')
})



app.listen(5000, ()=>{
    console.log('Server is running on port 5000...')
})