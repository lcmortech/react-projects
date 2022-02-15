const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const { errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//Connect to Database
connectDB()

//ROUTES
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server success! Started on port ${port}...`)
})