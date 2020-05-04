const fs = require('fs');
const path = require('path');

const dbConnection = require('./dbconnection.js');

const sqlPath = path.join(__dirname, 'dbbuild.sql');
const sql = fs.readFileSync(sqlPath).toString();

// dbConnection.query(sql, (err, res) => {
//   if (err) throw err;
//   console.log('Users table created with result: ', res);
//   dbConnection.end();
// });


const runDbBuild = cb => dbConnection.query(sql,cb)

module.exports = runDbBuild