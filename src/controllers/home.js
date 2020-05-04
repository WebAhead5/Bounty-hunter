

//GET HOMEPAGE (IF lOGGED IN)
exports.get = (req, res) => {
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    }

    //Get bounties function TODO:

    if (res.locals.signedIn) {
        return res.render('home', {
            signedIn: true,
            bounties: { bounties },
            username: res.locals.username
        });
    }

    //return to welcome page as default
    res.render('home', {
        signedIn: false
    });
};
