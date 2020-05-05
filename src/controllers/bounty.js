const getBountiesById = require('../models/queries/getBountiesById');
const getMessageData = require('../models/queries/getMessageData');
const addBounty = require('../models/queries/addBounty');
const removeBounty = require('../models/queries/removeBounty');


// TODO: add error handling

//GET BOUNTY (IF lOGGED IN)
exports.get = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    const bountyData = await getBountiesById(req.params.id);
    const messageData = await getMessageData(req.params.id);
    console.log(res.locals.username);


    if (res.locals.signedIn) {
        return res.render('bounty', {
            signedIn: true,
            bounties: bountyData,
            messages: messageData,
            username: res.locals.username,
            admin: res.locals.admin
        });
    }

    //return to welcome page as default if not logged in
    res.redirect('/');
};

exports.post = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    const { name, picture, crimes, bounty, status, furtherinfo } = req.body

    if (res.locals.signedIn && res.locals.admin) {
        await addBounty(name, picture, crimes, bounty, status, furtherinfo)
        res.redirect('/')
    }
}

exports.delete = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }
    const id = req.params.id
    if (res.locals.signedIn && res.locals.admin) {
        await removeBounty(id)
        res.redirect('/')
    }
}

exports.addBountyPage = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }
    if (res.locals.signedIn && res.locals.admin) {
        res.render('addbounty', {
            username: res.locals.username
        })
    }
}