const http = require('http');
const fs = require("fs");
const fileContent = fs.readFileSync("tut16.html", "utf-8");

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type':'text/html'});
res.end(fileContent);
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});