
//GET HOMEPAGE (IF lOGGED IN)
exports.get = (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    //const bountyData = getBounties() FIXME:

    if (res.locals.signedIn) {
        return res.render('bountyDetails', {
            bounties: { bountyData },
            username: res.locals.username
        });
    }

    //return to welcome page as default
    res.render('/');
};
