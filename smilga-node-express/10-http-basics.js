const http = require('http')

const server = http.createServer((req, res) => {
    console.log('User hit the server')
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>home page</h1>')
})

server.listen(5000)