
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewUser = require('../models/queries/addUser');
const findByUsername = require('../models/queries/findByUsername');



//TODO:
//NEED ADDNEW USER FUNCTION
//NEED GET YSER BY USERNAME FUNCTION


//GET LOGIN PAGE
exports.loginPage = (req, res) => {
    res.render('login');
};


//GET REGISTER PAGE
exports.registerPage = (req, res) => {
    res.render('register');
};


//##############################################################

//POST NEW USER - REGISTER PAGE
exports.addUser = (req, res) => {

    //CHECK PASSWORD IS THE SAME
    const { name, password, username, confirmPassword } = req.body;
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
            await addNewUser(name, username, hash)

            
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
        const users = await findByUsername(username); 

        //CHECK CREDENTIALS
        bcrypt.compare(password, users.password, function (err, result) {
            if (!result) {
                return res.render('login', {
                    error: 'Password is incorrect'
                });
            }

            //SIGN JWT TOKEN
            jwt.sign(users.username, process.env.JWT_SECRET, function (err, token) {
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
};
