const db = require('../../database/dbconnection')

module.exports = function (bountyId) {
    return new Promise(async (resolve, reject) => {
        try {
            var messageData = await db.query('SELECT comments.id ,comments.message ,comments.userid ,comments.bountyid , comments.dateposted, users.username FROM comments INNER JOIN users on users.id = comments.userid INNER JOIN bounties on bounties.id = comments.bountyid WHERE bountyid = $1;', [bountyId]);
            resolve(messageData.rows)
        } catch (e) {
            console.error(`getBountiesByName Error: ${e}`);
            reject(new Error('an error occurred in models/getBountiesByName.js'))
        }
        //console.log("getmessagedata is getting: ",messageData.rows)
    })
}