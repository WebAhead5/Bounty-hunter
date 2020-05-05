const getBountiesById = require('../models/queries/getBountiesById');
const getMessageData = require('../models/queries/getMessageData');

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
    res.render('/');
};
