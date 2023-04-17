var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1971",
  database: "hi"
});

con.connect(function(error) {
  if (error) throw console.error();;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (error, result) {
    if (error) throw error();
    console.log("Table created");
  });
});