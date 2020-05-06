const db = require('../../database/dbconnection')

module.exports = async function (username) {
    try {
        var usernames = await db.query('SELECT * FROM users WHERE username = $1', [username])
    } catch (e) {
        console.error(`addUser Error: ${e}`);
        throw new Error('an error occurred in models/findByUsername.js')
    }
    if(!usernames.rows.length) throw new Error('models/findByUsername username not found')
    return usernames.rows[0]
}

