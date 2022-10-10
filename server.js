const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/Animall/index.html")
})

app.get('/board', function(req,res) {
    res.sendFile(__dirname + "/Animall/boardList.html")
})

app.get('/writing', function(req,res) {
    res.sendFile(__dirname + "/Animall/writingPage.html")
})

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})