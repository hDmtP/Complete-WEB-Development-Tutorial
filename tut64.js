const fs = require("fs");  //importing function fs
let text = fs.readFileSync("tut13.css", "utf-8");
text = text.replace("greenyellow", "red");
fs.writeFileSync("hdmtp.css", text);
console.log(text);
console.log("Creayting s new fke");
