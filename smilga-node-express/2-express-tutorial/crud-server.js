const express = require('express')
const app = express()

const people = require('./routes/people')
const people = require('./routes/auth')

//remember app.use applies middleware to all our routes, and can also serve up a public/statis folder
//static assets
app.use(express.static('.methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

//parse people route
app.use('/api/people', people)
//parse auth route
app.use('/login', auth)



app.listen(5000, ()=>{
    console.log('Server is running on port 5000...')
})