const db = require('../../database/dbconnection')

module.exports = async function (message, userid, bountyid,date) {
    console.log('Queries/addNewComment is adding: ', message)
    console.log(message, userid, bountyid,date)
    try {
        await db.query('INSERT INTO comments (message, userid, bountyid, dateposted) VALUES ($1, $2, $3,$4);', [message, userid, bountyid, date])
    } catch (e) {
        throw new Error('Queries/addNewComment has thrown an error')
    }
    return "comment has been posted"
}

// INSERT INTO comments (message, userid, bountyid, dateposted) VALUES ('message', 1, 1, '2020-05-05 13:47:44');