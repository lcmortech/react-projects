require("http").createServer((req, res)=> {
    res.end("Hello from my first Node Web Server")
}).listen(80)