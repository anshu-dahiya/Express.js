const express = require('express');
const app = express();
const phone = require('./data.js')

app.get('/',(req,res) => {
    res.send("<h1>Home Page<h2> <a href='/api/phone'>Phone</a>")
})

app.get('/api/phone',(req,res) => {
    const selectedItem = phone.map((items) => {
        const {id,name} = items;
        return {id,name};
    })  //For each item, it pulls out just the id and name using what's called "destructuring"

    res.json(selectedItem)
})



app.listen(3000,() => {
    console.log("Server Stared")
})