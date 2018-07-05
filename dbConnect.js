var sql = require("mysql");

var connection = sql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    } else {
        console.log("database has been connected");
    }
});
module.exports = connection;
// connection.end();