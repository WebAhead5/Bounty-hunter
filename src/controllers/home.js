const getBounties = require('../models/queries/readBounties');

//GET HOMEPAGE (IF lOGGED IN)
exports.get = async (req, res) => {
    try {
        console.log('home requested')
        if (res.locals.error) {
            return res.render('error', {
                error: res.locals.error
            });
        } else {

            const bountyData = await getBounties()
            if (res.locals.signedIn) {
                return res.render('home', {
                    signedIn: true,
                    bounties: bountyData,
                    username: res.locals.username,
                    admin: res.locals.admin
                });

            } else {    //return to welcome page as default
                res.render('home', {
                    signedIn: false
                });
            }
        }
    }
    catch (error) {
        res.render('error', {
            statusCode: "Home",
            errorMessage: error.message
        });

    }
};
