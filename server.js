var express = require('express');
var app = express();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : ' s140390',
  password : ' abc123**',
  database : 'db140390'
});