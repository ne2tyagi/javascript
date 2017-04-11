var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	console.log(req.url);
if(req.url == '/'){
		getTitles(res);
}

}).listen(3000);
console.log('Server Listening ...');
console.log('1. Reducing nesting by creating intermediatory functions.')
console.log('2. Reducing nesting by returning early.')

function getTitles(res){
	fs.readFile('./titles.json', function(err, data){
		if(err)
			return hadError(err, res);
		var titles = JSON.parse(data.toString());
		getTemplate(titles, res);
	});	
}
function getTemplate(titles, res){
	fs.readFile('./template.html', function(err2, data2){
		if(err2)
			return hadError(err, res);
		var tmpl = data2.toString();
		//console.log(titles.join(','), tmpl);
		formatHtml(titles, tmpl, res)
	});
}
function formatHtml(titles, tmpl, res){
	var html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(html);
}
function hadError(err, res){
	console.log(err);
	res.end('Server Error')
}