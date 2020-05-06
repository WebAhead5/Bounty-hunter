const db = require('../../database/dbconnection')

module.exports = async function () {
    try {
        var bounties = await db.query('SELECT * FROM bounties')
    } catch (e) {
        console.log(`read bounties Error: ${e}`);
        throw new Error('an error occurred in models/readBounties.js')
    }
    return bounties.rows

}

