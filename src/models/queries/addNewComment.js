const db = require('../../database/dbconnection')

module.exports = function (message, userid, bountyid, date) {
    return new Promise(async (resolve, reject) => {
        try {
            await db.query('INSERT INTO comments (message, userid, bountyid, dateposted) VALUES ($1, $2, $3,$4);', [message, userid, bountyid, date])
            resolve("comment has been posted")
        } catch (e) {
            reject(new Error('Queries/addNewComment has thrown an error'))
        }
    })
}

// INSERT INTO comments (message, userid, bountyid, dateposted) VALUES ('message', 1, 1, '2020-05-05 13:47:44');