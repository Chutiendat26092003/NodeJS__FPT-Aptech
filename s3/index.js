const http = require('http');
const httpServer = http.createServer(function(req, res) {
    res.end('Hello!!');
});

httpServer.listen(8080, function() {
    console.log("Server listening on prt 8080");
});