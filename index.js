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

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
  });
  
  
  app.get('/', function (req, res) {

    res.sendFile(__dirname + '/home.html');

});


app.post('/data', function(req, res){

    connection.query(sql , function(err, result){
    var sql = "INSERT INTO groceries (Item) VALUES ('"+req.body.noofproducts+"')";
    
        if(err) throw err;
        console.log("added");
    });

    res.send(data);

});

con.end();

app.listen(3000, function () {
console.log('App is running on port');
});

 

   