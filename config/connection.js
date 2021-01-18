// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");

if (process.env.JAWSDB_MARIA_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "Arrasmith913!",
    database: "burgersDB"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
