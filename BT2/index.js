const path = require('path')
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = 3000;

const festival = [
    'Happy New Year',
    'Happy Mid-Autumn Festival',
    'Merry christmas',
];

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/holidays', (req, res) => {
    let holiday = '';
    let img = '';
    if (req.query.holidays == 'newyear') {
        holiday = festival[0];
        img = '/img/tet.jpg';
    } else if (req.query.holidays == 'mid_autumn') {
        holiday = festival[2];
        img = '/img/trungthu.jpg';
    } else if (req.query.holidays == 'chrismas') {
        holiday = festival[2];
        img = '/img/christmas.jpg';
    }
     res.render('holidays', {
        holiday,
        img
     });
});



app.get('/holidays/festival', (req, res) => {
    res.render('home', {});
});



app.listen(port);
