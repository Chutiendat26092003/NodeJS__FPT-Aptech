app.post('/process-contact', (req, res) => {
    try {
        // here's where we would try to save contact to database or other
        // persistence mechanism...for now, we'll just simulate an
        error;
        if (req.body.simulateError) throw new Error('error saving contact!');
        console.log(`contact from ${req.body.name}
<${req.body.email}>`);
        res.format({
            'text/html': () => res.redirect(303, '/thank-you'),
            'application/json': () => res.json({ success: true }),
        });
    } catch (err) {
        // here's where we would handle any persistence failures
        console.error(
            `error processing contact from
${req.body.name} ` + `<${req.body.email}>`
        );
        res.format({
            'text/html': () => res.redirect(303, '/contact-error'),
            'application/json': () =>
                res.status(500).json({
                    error: 'error saving contact information',
                }),
        });
    }
});
