exports.api = {};
exports.home = (req, res) =>
    res.render('home', { session: req.session.username ?? '' });

exports.register = (req, res) => {
    res.render('register', { csrf: 'CSRF token goes here' });
};

exports.api.registerSubmit = (req, res) => {
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Birthdate (from visible form field): ' + req.body.birthdate);
    console.log('Gender (from visible form field): ' + req.body.gender);
    console.log('Class (from visible form field): ' + req.body.class);
    console.log(
        'Registration Code (from visible form field): ' + req.body.registration
    );
    req.session.username = req.body.name;
    res.redirect(303, '/home');
};
