const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');
const bodyParser = require('body-parser');

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ resave: false, saveUninitialized: false, secret: 'key' }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', handlers.home);

app.get('/register', handlers.register);
app.post('/api/register', handlers.api.registerSubmit);


// Listen for port
app.listen(port, () => {
    console.log(
        `Express started on http://localhost:${port}` +
            ` --> press Ctrl-C to terminate.`
    );
});