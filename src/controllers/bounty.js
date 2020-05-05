const getBountiesById = require('../models/queries/getBountiesById');
const addBounty = require('../models/queries/addBounty');

// TODO: add error handling

//GET HOMEPAGE (IF lOGGED IN)
exports.get = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    const bountyData = await getBountiesById(req.params.id)
    if (res.locals.signedIn) {
        return res.render('bounty', {
            bounties: bountyData,
            username: res.locals.username
        });
    }

    //return to welcome page as default
    res.render('/');
};

exports.post = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    const { name, picture, crimes, bounty,status,furtherinfo } = req.body

    if (res.locals.signedIn) {
        await addBounty(name, picture, crimes, bounty, status, furtherinfo)
        res.redirect('/')
    }
}