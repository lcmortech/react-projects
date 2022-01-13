const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//creates an instance and names event with an attached callback function
//order matters: first we listen for event and only then emit it
customEmitter.on('response', (name, id)=>{
    console.log(`data received from user ${name} with ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

//emits using the name of event and callback function attached
customEmitter.emit('response', 'john', 34)