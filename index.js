const express = require('express');
const app = express();

app.get('/',(req,res) => {
    // res.send("<h1>Hello Wrold!</h1>") 
    res.status(404).send("<h1>Somthing Went Wrong</h1>");
    
})


app.listen(3000,() => {
    console.log("Server is running")
})