const db = require('../../database/dbconnection')

module.exports = async function (bountyId) {
    try {
        var bountyId = await db.query('SELECT * FROM bounties WHERE id = $1;', [bountyId])
    } catch (e) {
        console.log(`getBountiesByName Error: ${e}`);
        throw new Error('an error occurred in models/getBountiesByName.js')
    }
    if(!bountyId.rows.length) throw new Error('models/getBountiesByName bounty not found')
    return bountyId.rows[0]
}
