var http = require('http'); 
var fs 	 = require('fs'); 
var page = fs.readFileSync('./mainpage.htm'); 

http.createServer(function(req,res){
	res.end(page); 
}).listen(8990); 