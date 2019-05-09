var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
});


connection.connect( function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;
