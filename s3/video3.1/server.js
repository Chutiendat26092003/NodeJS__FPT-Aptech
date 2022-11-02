var express = require('express'),
    app = express();

// app.use(express.logger());


app.get('/hello/:person', function(req, res) {
    res.send("Hello " + req.params.person);
});

app.get('/goodbye', function (req, res) {
    res.send('Goodbye world');
});

app.all('*', function(req, res) {
    res.send(404);
});

app.listen(8080, function() {
    console.log(
        'server is running on dụ http://127.0.0.1:8080/'
    );
});



