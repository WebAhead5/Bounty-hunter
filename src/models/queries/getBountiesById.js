const db = require('../../database/dbconnection')

module.exports = function (bountyId) {
    return new Promise(async (resolve, reject) => {
        try {
            var id = await db.query('SELECT * FROM bounties WHERE id = $1;', [bountyId])
            if (!id.rows.length) throw new Error('models/getBountiesById bounty not found')
            resolve(id.rows[0])
        } catch (e) {
            console.error(`getBountiesByName Error: ${e}`);
            reject(new Error('an error occurred in models/getBountiesById.js'))
        }
    })
}
