const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

const fortunes = require('./lib/fortune');

// configure Handlebars view engine
app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
        // extname: '.hbs',
    })
);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => {
    // const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortunes: fortunes.getFortune() });
});
// custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
});
// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
});

app.listen(3000);
