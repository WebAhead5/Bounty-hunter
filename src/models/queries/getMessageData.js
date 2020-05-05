const db = require('../../database/dbconnection')

module.exports = async function (bountyId) {
    try {
        var messageData = await db.query('SELECT * FROM comments WHERE bountyid = $1;', [bountyId]);
    } catch (e) {
        console.error(`getBountiesByName Error: ${e}`);
        throw new Error('an error occurred in models/getBountiesByName.js')
    }
    if(!messageData.rows.length) throw new Error('models/getBountiesByName bounty not found')
    console.log("getmessagedata is getting: ",messageData.rows)
    return messageData.rows
}