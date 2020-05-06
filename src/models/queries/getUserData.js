const db = require('../../database/dbconnection')

module.exports = async function (bountyID) {
    try {
        var userData = await db.query('SELECT * FROM users WHERE id IN (SELECT userID FROM comments WHERE bountyid = $1);', [bountyID])
        // SELECT * FROM users WHERE id IN (SELECT bountyID FROM comments WHERE bountyid = 1);
    } catch (e) {
        console.error(`getUser Error: ${e}`);
        throw new Error('an error occurred in models/getUserData.js')
    }
    if (!userData.rows.length) throw new Error(`models/getUserData id not found for ${bountyID}`)

    //console.log('getuserData is returning: ', userData.rows);
    return userData.rows
}
