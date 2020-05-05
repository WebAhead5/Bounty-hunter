const db = require('../../database/dbconnection')

module.exports = async function(id) {
    try{
        db.query('DELETE FROM bounties WHERE id = $1',[id])
    } catch(e) {
        throw new Error('an error has occurred in the database')
    }
    return 'bounty has been deleted'
}