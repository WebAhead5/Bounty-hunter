const getBountiesById = require('../models/queries/getBountiesById');

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
