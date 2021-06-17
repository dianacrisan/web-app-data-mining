const mysql = require('mysql');

const db_connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "bachelor_thesis"
});

module.exports = db_connection;