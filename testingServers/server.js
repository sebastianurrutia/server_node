var http = require('http');
var host = '192.168.1.2';
var puerto = '8000'

var servidor = http.createServer(function(require,response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1> Hola Mundeano!</h1>');
})

servidor.listen(puerto,host,function() {
    console.log('El servidor esta corriendo ' + host + ":" + puerto);
})