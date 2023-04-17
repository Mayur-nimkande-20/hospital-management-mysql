
var mysql = require('mysql2');
const bodyParser = require('body-parser');
const express = require('express');
const port =process.env.PORT || 5000;
const app= express()


app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


// connecting db
var con = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'root',      //  assign your database username
  password: '1971',      // assign your database password
  database: 'hi' // assign database Name
}); 


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/front/homepage.html')
});


// taking input from form
app.post('/login', (req, res) => {

    var email = req.body.email;
    var password = req.body.psw;
    console.log(req.body);
    // var firstName = req.body.firstName;
    // var lastName = req.body.lastName;

    // var passwordR = req.body.psw-repeat;

    con.connect(function(err) {
        if (err) throw err;
        console.log('Database is connected successfully !');

        con.query(`SELECT * FROM users WHERE name = '${email}' AND password  = '${password}'`, function(err, result){
            if(err){
                console.log(err);
            };
            if(Object.keys(result).length > 0){
                res.send('reg failed');
            }
            else
            {
            //creating user page in userPage function
            function userPage(){
                // We create a session for the dashboard (user page) page and save the user data to this session:
                req.express.user = {
                    // firstname: firstName,
                    // lastname: lastName,
                    email: email,
                    password: password 
                };
            }

                var sql = `INSERT INTO users (name, password) VALUES ('${email}', '${password}')`;
                
                con.query(sql, function (err, result) {
                if (err){
                    console.log(err.message);
                }
                else
                {
                    // using userPage function for creating user page
                    // userPage();
                    console.log("Person added has been added");
                    // res.sendFile(__dirname+"/public/login.html");
                };
            });''
            
            
        }
      
      });
});
});

// app.post('/delete',(req,res)=>{
//     // con.connect(function(err){
//         var id1 = req.body.id1;
//         con.query("DELETE FROM users WHERE id ="+id1,function(err,result) {
//             if(err){
//                 console.log(err);
//                 res.redirect('/');
//             }
//             else{
//                 res.send("deleted successfully");
//             }

//         } );
// });
    // var password = req.body.psw;
    // });
    



// var sql = `INSERT INTO users (firstname, lastname, username, password) VALUES ('${firstName}', '${lastName}', '${userName}', '${password}')`;
app.listen(port,()=>{
    console.log('server started')
});

