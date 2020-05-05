const getBountiesById = require('../models/queries/getBountiesById');

//GET BOUNTY (IF lOGGED IN)
exports.get = async (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    const bountyData = await getBountiesById(req.params.id)

    if (res.locals.signedIn) {
        return res.render('bounty', {
            signedIn: true,
            bounties: bountyData,
            username: res.locals.username,
            admin: res.locals.admin
        });
    }

    //return to welcome page as default if not logged in
    res.render('/');
};
