const getBounties = require('../models/queries/readBounties');

//GET HOMEPAGE (IF lOGGED IN)
exports.get = async (req, res) => {
    console.log('home requested')
    if (res.locals.error) {
        return res.render('error', {
            error: res.locals.error
        });
    } else {

        const bountyData = await getBounties()
        if (res.locals.signedIn) {
            console.log('first if happening', res.locals.signedIn, res.locals.error);
            
            return res.render('home', {
                signedIn: true,
                bounties:  bountyData ,
                username: res.locals.username
            });

        } else {    //return to welcome page as default
            res.render('home', {
                signedIn: false
            });
        }
    }
};
