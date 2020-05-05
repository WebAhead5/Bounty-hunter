const db = require('../../database/dbconnection')

module.exports = async function (name, picture, crimes, bounty, status, furtherinfo) {
    try {
        await db.query(`INSERT INTO bounties (name, picture,crimes,bounty,status,furtherinfo) VALUES($1, $2, $3, $4, $5, $6);`, [name, picture, crimes, bounty, status, furtherinfo])
    } catch (e) {
        throw new Error('an error has occurred in the database')
    }
    return "bounty has been added"
}
