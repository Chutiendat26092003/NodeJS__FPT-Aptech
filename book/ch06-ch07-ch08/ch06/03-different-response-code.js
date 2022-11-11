app.get('/error', (req, res) => {
    res.status(500);
    res.render('error');
});

app.get('/error', (req, res) => res.status(500).render('error'));
