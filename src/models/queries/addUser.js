const db = require('../../database/dbconnection')

module.exports = async function (name, username, hash) {
    console.log("addUser username is: ",username)
    try {
        var exists  = await db.query('SELECT EXISTS(SELECT * FROM users WHERE username = $1);', [username])
    } catch (e) {
        console.log(`addUser Error: ${e}`);
        throw new Error('an error occurred in models/addUser.js')
    }
    console.log(exists.rows[0].exists)
    exists = exists.rows[0].exists
    if (exists) throw new Error('User already exists in database')
    try {
        await db.query(`INSERT INTO users (name, username, password, score) VALUES($1, $2, $3, $4);`, [name, username, hash, 0])
    } catch (e) {
        throw new Error('an error has occurred in the database')
    }
    return "user has been added"
}

