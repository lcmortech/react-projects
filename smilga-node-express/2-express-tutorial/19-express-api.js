const express = require('express')
const app = express()
const { products } = require('./data')
//GET
app.get('/',(req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products/1',(req, res)=>{
    const newProducts = products.map(product => {
        const { id,name,image } = product;
        return { id,name,image }
    })
    res.json(newProducts)
})


app.listen(5000, ()=>{
    console.log('Server up and running on port 5000...')
})