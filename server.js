var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : ' s140390',
  password : ' abc123**',
  database : 'db140390'
});
app.set('view engine', 'ejs');

app.get('/', function (request, response)
{
    response.render('pages/index');

});

console.log('App is running at http://localhost:8080');
app.listen(8080);