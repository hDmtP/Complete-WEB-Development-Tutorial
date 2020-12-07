const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alligment</title>
      
      <style>
          
          *{
                  box-sizing: border-box;
          }
          .programmer{
              width: 1000px;
              border: 3px solid rgb(33, 194, 11);
              margin: 75px auto;
              background-color: aqua;
                      
          }
          .ROG{
                       border: 3px solid red;
                       margin: 12px 3px;
                       padding: 12px 3px;
                       background-color: rgb(233, 214, 214);
          }
  
          #inteli5pgen{
              float: left;
              width: 48%;
          }
          #laptop{
              /*float: left;*/
              float: right;
              width: 48%;
          }
          #graphiccard{
              /*float: left;*/
              clear: both;
              width: 100%;
          }
          p, h3{
              /*text-align: right;*/
              text-align: justify;
          }
          h2{
              margin: 43px auto;
              width: 444px;
          }
      </style>
  </head>
  <body>
      
      <div class="programmer">
          <h2>ASUS:  Republic of Gamers series(ROG)</h2>
          <div id="inteli5pgen" class="ROG">
              <h3>CPU</h3>
              <p id="inteli5pgenset" class="ASUS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptate debitis neque at, natus itaque facere sed atque culpa, illo quae voluptatibus veniam nisi magnam incidunt quod officia mollitia repudiandae tempore modi architecto harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit architecto porro quidem perspiciatis cum, voluptatem dolorum consectetur debitis. Qui voluptas omnis ipsam tenetur quia perferendis aliquam ut unde consequatur..</p>
          </div>
          <div id="laptop" class="ROG">
              <h3>Coding Laptop</h3>
              <p id="laptopset" class="ASUS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptate debitis neque at, natus itaque facere sed atque culpa, illo quae voluptatibus veniam nisi magnam incidunt quod officia mollitia repudiandae tempore modi architecto harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit architecto porro quidem perspiciatis cum, voluptatem dolorum consectetur debitis. Qui voluptas omnis ipsam tenetur quia perferendis aliquam ut unde consequatur..</p>
          </div>
          <div id="graphiccard" class="ROG">
              <h3>GPU</h3>
              <p id="graphiccardset" class="ASUS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptate debitis neque at, natus itaque facere sed atque culpa, illo quae voluptatibus veniam nisi magnam incidunt quod officia mollitia repudiandae tempore modi architecto harum.</p>
          </div>
          <div id="mouse" class="ROG">
              <h3>GPU</h3>
              <p id="mouseset" class="ASUS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptate debitis neque at, natus itaque facere sed atque culpa, illo quae voluptatibus veniam nisi magnam incidunt quod officia mollitia repudiandae tempore modi architecto harum.</p>
          </div>
      </div>
  </body>
  </html>`);
//   res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});