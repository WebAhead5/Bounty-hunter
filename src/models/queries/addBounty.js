const db = require('../../database/dbconnection')

module.exports =  function (name, picture, crimes, bounty, status, furtherinfo) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.query(`INSERT INTO bounties (name, picture,crimes,bounty,status,furtherinfo) VALUES($1, $2, $3, $4, $5, $6);`, [name, picture, crimes, bounty, status, furtherinfo])
            resolve("bounty has been added")
        } catch (e) {
            reject(new Error('an error has occurred in the database'))
        }
    })
}
