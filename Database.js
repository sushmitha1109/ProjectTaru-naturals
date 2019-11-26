var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database :'mydb'

});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (Name VARCHAR(255), Email VARCHAR(255) , ContactNumber Int(11) , RestaurantName VARCHAR(255))";
//   con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
//   });
// });
  
 
  app.get('/', function (req, res) {

    res.sendFile(__dirname + '/Register.html');

});



app.post('/Data', function(req, res){

    connection.query(sql , function(err, result){
    var sql = "INSERT INTO customers (Name,Email,ContactNumber,RestaurantName) VALUES (" + req.body.exampleInputName + "', '"+req.body.exampleInputEmail +"','"+ req.body.exampleInputcontactnumber +"','"+ req.body.exampleInputRestaurantName +"')";
        if(err) throw err;
        console.log("Data added");
    });

    res.send(data);

});

con.end();

app.listen(3000, function () {
console.log('App is running on port');
});

 

   