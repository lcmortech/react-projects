const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
    console.log('User hit the server')
    console.log(req.method)
    console.log(req.url)
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>home page</h1>')
    res.end()
    } 
    //About page
    else if (url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //404
    res.writeHead(400, {content-type: 'text/html'})
    res.write('<h1>Page not found, bro')
    res.end()
    }
})

server.listen(5000)

//you ALWAYS need to call res.end() in order to end communication
//yes, the content-type matters. 'text/html' will have the server read file as html, while
//'text/plain' will read file as plain text