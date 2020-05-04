
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//TODO:
//NEED ADDNEW USER FUNCTION
//NEED GET YSER BY USERNAME FUNCTION


//GET LOGIN PAGE
exports.login = (req, res) => {
    res.render('login');
};


//GET REGISTER PAGE
exports.register = (req, res) => {
    res.render('register');
};


//##############################################################

//POST NEW USER - REGISTER PAGE
exports.addUser = (req, res) => {

    //CHECK PASSWORD IS THE SAME
    const { password, username, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.render('register', {
            error: "Passwords don't match"
        });
    }

    //HASH THE PASSWORD
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            return res.render('register', {
                error: error.message
            });
        }
        try {

            //ADD TO DB
            await addNewUser(username, hash) // TODO: NEED TO BUILD FUNCTION

            res.redirect('/')

            //IF ERROR WHEN ADDING
        } catch (error) {
            res.render('register', {
                error: error.message
            })

        }
    });
}

//##############################################################

//POST CHECK USER - LOGIN PAGE
exports.authenticate = async (req, res) => {
    try {
        const { password, username } = req.body;

        //GET USER DETAILS FROM USERNAME
        const user = await findByUsername(username); //TODO: Ned to build function

        //CHECK CREDENTIALS
        bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
                return res.render('login', {
                    error: 'Password is incorrect'
                });
            }

            //SIGN JWT TOKEN
            jwt.sign(user.username, process.env.JWT_SECRET, function (err, token) {
                if (err) {
                    res.render('login', {
                        error: err.message
                    });
                }
                res.cookie('access_token', token);
                res.redirect('/');
            });
        });
    } catch (error) {
        res.render('login', {
            error: error.message
        });
    }
};


//##############################################################

//GET LOG USER OUT & REDIRECT TO WELCOME
exports.logout = (req, res, next) => {
    res.clearCookie('access_token');
    res.redirect('/');
    next();
};
