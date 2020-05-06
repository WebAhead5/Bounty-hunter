const db = require('../../database/dbconnection')

module.exports = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.query('DELETE FROM bounties WHERE id = $1', [id])
            resolve('bounty has been deleted')
        } catch (e) {
            reject(new Error('an error has occurred in the database'))
        }
    })
}