
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewUser = require('../models/queries/addUser');
const findByUsername = require('../models/queries/findByUsername');



//GET LOGIN PAGE (IF NOT LOGGED IN)
exports.loginPage = (req, res) => {
    if (res.locals.signedIn) {
        res.redirect('/')
    } else {
        res.render('login');
    }
};


//GET REGISTER PAGE (IF NOT LOGGED IN)
exports.registerPage = (req, res) => {
    if (res.locals.signedIn) {
        res.redirect('/')
    } else {
        res.render('register');
    };

}


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
            console.error('error message in bcrypt: ', error.message)
            return res.render('register', {
                error: error.message
            });
        }
        try {
            //ADD TO DB
            console.log('addNewUser with: ', name, username, hash);

            await addNewUser(name, username, hash);

            const users = await findByUsername(username);

            //created users default to not admins
            const userdata = { username: username, admin: users.admin, userid: users.id }

            //Auto login once registered
            loginJWT(res, userdata, process.env.JWT_SECRET)


            //IF ERROR WHEN ADDING
        } catch (error) {
            console.error("error when addNewUser");
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
            
            //set username and admin status
            const userdata = { username: username, admin: users.admin, userid: users.id }

            loginJWT(res, userdata, process.env.JWT_SECRET)

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


//##############################################################

//Cretae JWT and redirect tto home (logged in)

const loginJWT = (res, dataobject, secret) => {
    console.log("loginJWT tellus us dataobject and secret",dataobject, secret)

    jwt.sign(dataobject, secret, function (err, token) {
        if (err) {
            res.render('login', {
                error: err.message
            });
        }

        //10 mins cookie age
        const cookieAge = 1000 * 60 * 10

        res.cookie('access_token', token, { httpOnly: true, maxAge: cookieAge });
        res.redirect('/'), {
        };
    });

}