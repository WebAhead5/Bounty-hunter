const db = require('../../database/dbconnection')

module.exports = async function () {
    try {
        var bounties = db.query('SELECT * FROM bounties')
    } catch (e) {
        console.log(`addUser Error: ${e}`);
        throw new Error('an error occurred in models/readBounties.js')
    } 
    return bounties

}

