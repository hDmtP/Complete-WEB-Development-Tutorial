const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res)=>{
    res.status(420).send("This is my first express app with harry")
});  
app.get("/about", (req, res)=>{
    res.send("This is my first express app/about with harry")
});  
app.post("/about", (req, res)=>{
    res.send("This is my first post-express app/about with harry")
});  

app.listen(port, ()=>{
    console.log(`the app is running on port ${port}`)
});