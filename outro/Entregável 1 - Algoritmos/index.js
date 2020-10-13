var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer(function (request, response) {
    if(request.url === '/' || request.url === '/index.html'){
        fs.readFile('index.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
                console.log(request.url)
            }
        });
    }else{
        response.statusCode = 404;
        response.end('Arquivo não encontrado');
    }

});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});