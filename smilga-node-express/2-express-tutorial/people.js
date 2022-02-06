const express = require('express')
const router = express.Router()


//the default method the browser performs
app.get('/api/people',(req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name})
    //res.status(201).send('Success')
})

app.post('/api/postman/people',(req, res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400)
        .json({success: false, msg: 'please provide name value'})
    } else {
        res.status(201).json({success: true, data: [...people, name]})
    }
})



app.post('api/postman/people'),(req, res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, data: [...people, name]})
}

app.put('/api/people/:id',(req, res)=>{
    const { id } = req.params
    const { name } = req.body

    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res
        .status(400)
        .json({success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map(person =>{
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res
    .status(201)
    .json({success: true, data: newPeople})
})

app.delete('/api/people',(req, res)=>{
    const person = people.find(person => person.id === Number(req.params.id))

    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(req.params.id))
    return res
    .status(200)
    .json({success: true, data: newPeople})


})