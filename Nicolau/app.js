const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/script.js");
})


app.listen(3001, function(){console.log("Servidor Rodando");})