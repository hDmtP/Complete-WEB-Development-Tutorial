// Sysnchronus or blocking => line by line execution
// Asynchronus or non-blocking => line by line execution not guranteed, call backs will fire

const fs = require("fs");
const text = fs.readFile("tut15.html", "utf-8", (error,data) => {
    console.log(error,data);
});
console.log(text);
console.log("lololol");

