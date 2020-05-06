const getBountiesById = require('../models/queries/getBountiesById');
const getMessageData = require('../models/queries/getMessageData');
const addBounty = require('../models/queries/addBounty');
const removeBounty = require('../models/queries/removeBounty');

// TODO: add error handling

//GET BOUNTY (IF lOGGED IN)
exports.get = async (req, res) => {
    try {
        if (res.locals.error) {
            return res.render('error', {
                error: res.locals.error
            });
        }
        const bountyData = await getBountiesById(req.params.id);
        const messageData = await getMessageData(req.params.id);
        if (res.locals.signedIn) {
            return res.render('bounty', {
                signedIn: true,
                bounties: bountyData,
                messages: messageData,
                admin: res.locals.admin
            });
        }

        //return to welcome page as default if not logged in
        res.redirect('/');
    }
    catch (error) {
        res.render('error', {
            statusCode: "Messages",
            errorMessage: error.message
        });
    };
}

exports.post = async (req, res) => {
    try {
        if (res.locals.error) {
            return res.render('error', {
                error: res.locals.error
            });
        }

        const { name, picture, crimes, bounty, status, furtherinfo } = req.body
        if (name === "" || picture === '' || bounty === "" || status === '' || furtherinfo === '') {
            return res.render("addbounty", {
                error: "All fields must be completed, buddy"
            });
        }

        if (res.locals.signedIn && res.locals.admin) {
            await addBounty(name, picture, crimes, bounty, status, furtherinfo)
            res.redirect('/')
        }
    }
    catch (error) {
        res.render('error', {
            statusCode: "addbounty",
            errorMessage: error.message
        });
    }
}

exports.delete = async (req, res) => {
    try {
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
    catch (error) {
        res.render('error', {
            statusCode: "Delete Bounty",
            errorMessage: error.message
        });

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
    } else {
        res.redirect("/")
    }
}