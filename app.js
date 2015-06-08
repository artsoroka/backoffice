var express = require('express'); 
var app     = express(); 
var fs 	    = require('fs'); 
var page    = fs.readFileSync('./mainpage.htm'); 

app.use(express.static(__dirname + '/public')); 

app.get('/', function(req,res){
  res
    .header('Content-Type', 'text/html')
    .send(page); 
}); 

app.listen(8990); 
