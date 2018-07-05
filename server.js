// Import
var express = require("express");

// Instantiate server
var server = express();

//Lauch Server
server.get("/", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send("<h1>BONJOUR SUR MON SERVER</h1>");
});

// Launch server
server.listen(8000, function(){
    console.log('server en écoute =)');
});