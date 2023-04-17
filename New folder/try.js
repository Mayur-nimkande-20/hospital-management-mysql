var mysql = require('mysql2');
var con = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'root',      //  assign your database username
  password: '1971',      // assign your database password
  database: 'hi' // assign database Name
}); 
con.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
  

//   try
// {
//     var q1 = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"  ;
//     con.query(q1, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }
//   catch{
    var sql = "INSERT INTO users (name, password) VALUES ('ji','hi');";
    // var values = [
    //   ['John', 'Highway 71'],
    //   ['Peter', 'Lowstreet 4'],
    //   ['Amy', 'Apple st 652'],
    //   ['Hannah', 'Mountain 21'],
    //   ['Michael', 'Valley 345'],
    //   ['Sandy', 'Ocean blvd 2'],
    //   ['Betty', 'Green Grass 1'],
    //   ['Richard', 'Sky st 331'],
    //   ['Susan', 'One way 98'],
    //   ['Vicky', 'Yellow Garden 2'],
    //   ['Ben', 'Park Lane 38'],
    //   ['William', 'Central st 954'],
    //   ['Chuck', 'Main Road 989'],
    //   ['Viola', 'Sideway 1633']
    // ];
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });

    // sql2="SELECT * FROM"
    // con.query("SELECT * FROM users;")
    // if (err) throw err;
    //   console.log();
    // });
//   }
  });

module.exports = con;