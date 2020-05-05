const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
<<<<<<< HEAD
    if (req.cookies.access_token) {
        console.log(req.cookies.access_token)
=======
    if (req.cookies.access_token) {  
        console.log("authCheck access token is", req.cookies.access_token)  
>>>>>>> jd2
        jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, function (
            err,
            data
        ) {
            if (err) {
                res.locals.error = err;
                return next();
            }
<<<<<<< HEAD
=======

            
>>>>>>> jd2
            res.locals.signedIn = true;
            res.locals.username = data.username;
            res.locals.admin = data.admin;

            next()
        });
    } else {
        res.locals.signedIn = false;
        res.locals.username = null;

        next();
    }
};
