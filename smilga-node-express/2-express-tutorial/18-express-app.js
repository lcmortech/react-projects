const express = require(express)
const path = require('path')
const app = express()

//Set Up Static (files) and Middleware
app.use(express.static('./public'))

app.get('/',(req, res)=> {
    res.sendFile(path.resolve(__dirname,'../index.html'))
})

app.all('*',(req, res)=>{
    res.status(404).send('Page not found')
})

app.listen(5000,()=>{
    console.log('Server up on port 5000...')
})

//In this case, you can also use path.join, but path.resolve is more specific
//A static folder is usually named public or static, and usually contains all the assets
//that remain unchanged by the server (ex: index.html, image files, style files, javascript files)
//index.html can also be served using a template engine


//fixing bug on app

//fixing second bug app