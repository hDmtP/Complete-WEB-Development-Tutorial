const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 80;

const home = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const memes = fs.readFileSync("memes.html");
const contact = fs.readFileSync("contact.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});