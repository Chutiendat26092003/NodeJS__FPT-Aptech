const express = require('express');
const expressHandlebars = require('express-handlebars');
const coolieParser = require('cookie-parser');
const session = require('express-session');
const catNames = require('cat-names');
const app = express();
const port = 3000;

app.use(coolieParser());
app.use(session({ resave: false, saveUninitialized: false, secret: 'keyboard cat'}));

const message = 'Hello esteemed programmer';

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');

app.get('/greeting/', (req, res) => {
    const style = req.query.style;
    res.render('greeting', {
        message: message,
        style: style,
        userId: req.cookies.userId,
        username: req.session.username,
    });
});

app.get('/set-random-userId', (req, res) => {
    res.cookie('userId', (Math.random()*10000).toFixed(0));
    res.redirect('/greeting');
});

app.get('/set-random-username', (req, res) => {
    req.session.username = catNames.random();
    res.redirect('/greeting');
});

app.listen(port);
