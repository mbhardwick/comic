const mysql = require('mysql');
let connection;

//connects to JAWDB so it can be published to heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
         connection = mysql.createConnection({
            host: process.env.HOST,
            port: 3306,
            user: process.env.USER,
            password: process.env.PASSWORD,//add your password
            database: process.env.DATABASE
        });
    };

// Make connection to db
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
      }
      console.log(`connected as id ${connection.threadId}`);
    });
    
    // Export connection for ORM to use.
module.exports = connection;