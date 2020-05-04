const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.cookies.access_token) {
        jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, function (
            err,
            data
        ) {
            if (err) {
                res.local.error = err;
                return next();
            }

            res.locals.signedIn = true;
            res.locals.username = data;
            next()
        });
    } else {
        res.locals.signedIn = false;
        res.locals.username = null;

        next();
    }
};
