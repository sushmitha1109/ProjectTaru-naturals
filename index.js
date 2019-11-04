
var mysql = require('mysql');
var con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database :'mydb'

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE groceries (Item VARCHAR(255), quantity VARCHAR(255), price VARCHAR(255))";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  });
  app.get('/', function (req, res) {

    res.sendFile(__dirname + '/home.html');

});


app.post('/data', function(req, res){

    var username=req.body.idname;
    // console.log(username)
    var sql = "INSERT INTO groceries (Item,quantity,price) VALUES ('" + req.body.idname+"')";
    connection.query(sql , function(err, result){
        if(err) throw err;
        console.log("added");
    });

    res.send(data);

});

//connection.end();

app.listen(3000, function () {
console.log('App is running on port');
});

 

   