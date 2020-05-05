const path = require('path');

exports.client = (req, res) => {
    res.status(404).render('error', {
        statusCode: 404,
        errorMessage: 'Page not found',
    });
};

exports.server = (err, req, res, next) => {
    console.error(err)
    res.status(500).render('error', {
        statusCode: 500,
        errorMessage: 'Internal server error',
    });
};


//403 fobidden