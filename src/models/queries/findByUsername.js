const db = require('../../database/dbconnection')

module.exports = function (username) {
    return new Promise(async (resolve, reject) => {
        try {
            var usernames = await db.query('SELECT * FROM users WHERE username = $1', [username])
            if (!usernames.rows.length) reject(new Error('models/findByUsername username not found'))
             resolve(usernames.rows[0])
        } catch (e) {
            console.log(`addUser Error: ${e}`);
            reject(new Error('an error occurred in models/findByUsername.js'))
        }
    })
}

