var express = require('express');
var app = express();
var url = require('url');
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/', function(req, res) {
    res.send('Home');
});


app.get("/greet/:statement", function (req, res) {
    var greeting = req.params.statement || "Default greeting";

    res.setHeader('token', 'my.list.secret');
    res.end("This is my first node app. " + greeting);
});

app.use(function(req, res) {
  res.status(404).send('Page not found. Try another');
})

app.listen(8080, function () {
  console.log("Server listening on prt 8080");
});
