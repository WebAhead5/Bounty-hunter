const express = require('express');
const router = express.Router();

const home = require('./home');
const auth = require('./auth');
const bounty = require('./bounty');
const error = require('./error');
const authCheck = require('../middlewares/authCheck');


//Get Page Routes
router.get('/', authCheck, home.get);
router.get('/bounty/:id', authCheck, bounty.get);

//Auth Routes
router.get('/login', authCheck, auth.loginPage);
router.get('/register', authCheck, auth.registerPage);
router.get('/logout', authCheck, auth.logout);
router.get('/addbounty', authCheck, bounty.addBountyPage)

//POST routes
router.post('/authenticate', auth.authenticate);
router.post('/addUser', auth.addUser);
router.post('/addbounty', authCheck, bounty.post)
router.post('/deleteBounty/:id', authCheck, bounty.delete)

//Error Routes
router.use(error.client);
router.use(error.server);
//403 route

module.exports = router;
