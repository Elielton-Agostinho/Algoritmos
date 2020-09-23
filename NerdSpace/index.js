
var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request, response) {
    
    if(request.url === '/' || request.url === '/landing.html'){
        fs.readFile('landing.html', null,(err,data) =>{
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
    }else if(request.url === '/assets/images/fav.png'){
        fs.readFile('./assets/images/fav.png', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                //response.end(err.message);
                response.setHeader('Content-Type','image/png');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/css/main.min.css'){
        fs.readFile('./assets/css/main.min.css', null,(err,data) =>{
            //
            if(err){
                
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/css');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/css/style.css'){
        fs.readFile('./assets/css/style.css', null,(err,data) =>{
            
            if(err){
                
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/css');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/css/color.css'){
        fs.readFile('./assets/css/color.css', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/css');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/css/responsive.css'){
        fs.readFile('./assets/css/responsive.css', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/css');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/images/wink.png'){
        fs.readFile('./assets/images/wink.png', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/png');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/images/dot-pattern.png'){
        fs.readFile('./assets/images/dot-pattern.png', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/png');
                response.write(data);
                response.end();
            }
        });
    }
    else if(request.url === '/assets/js/main.min.js'){
        fs.readFile('./assets/js/main.min.js', null,(err,data) =>{
            if(err){
                
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/js');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/assets/js/map-init.js'){
        fs.readFile('./assets/js/map-init.js', null,(err,data) =>{
            if(err){
                
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/js');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/assets/js/script.js'){
        fs.readFile('./assets/js/script.js', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/js');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/index.html'){
        fs.readFile('./assets/outros/index.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/index2.html'){
        fs.readFile('./assets/outros/index2.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/index-company.html'){
        fs.readFile('./assets/outros/index-company.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/logout.html'){
        fs.readFile('./assets/outros/logout.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/newsfeed.html'){
        fs.readFile('./assets/outros/newsfeed.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/inbox.html'){
        fs.readFile('./assets/outros/inbox.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/messages.html'){
        fs.readFile('./assets/outros/messages.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/time-line.html'){
        fs.readFile('./assets/outros/time-line.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/timeline-photos.html'){
        fs.readFile('./assets/outros/timeline-photos.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/timeline-videos.html'){
        fs.readFile('./assets/outros/timeline-videos.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/timeline-friends.html'){
        fs.readFile('./assets/outros/timeline-friends.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/timeline-groups.html'){
        fs.readFile('./assets/outros/timeline-groups.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/timeline-pages.html'){
        fs.readFile('./assets/outros/timeline-pages.html', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','text/html');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/strip-skins/strip/previous.png'){
        fs.readFile('./assets/css/strip-skins/strip/previous.png', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/png');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/strip-skins/strip/previous.svg'){
        fs.readFile('./assets/css/strip-skins/strip/previous.svg', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/svg');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/strip-skins/strip/next.svg'){
        fs.readFile('./assets/css/strip-skins/strip/next.svg', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/svg');
                response.write(data);
                response.end();
            }
        });
    }else if(request.url === '/strip-skins/strip/previous-faded.png'){
        fs.readFile('./assets/css/strip-skins/strip/previous-faded.png', null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type','image/png');
                response.write(data);
                response.end();
            }
        });
    }else{

        arquivo = request.url
        diretorio = arquivo.split(".");
        dir = "";
        tipo = "";
        //console.log(arquivo);
        if(diretorio[1] === 'jpg'){
            dir = '.'+arquivo;
            tipo = 'image/jpg'
        }else if(diretorio[1] === 'png'){
            dir2 = arquivo.split("/");
            
            if(dir2[1] === 'images'){
                dir = './assets'+arquivo;
            }else{dir = '.'+arquivo;}
            //console.log(dir)
            tipo = 'image/png'
        }else if(diretorio[1] === 'html'){
            dir = './assets/outros'+arquivo;
            tipo = 'text/html'
        }
        dir3 = arquivo.split("/");
            
        if(dir3[0] === '.'){

        }else if(dir3[1] === 'fonts'){
            fonts = arquivo.split("?");
            dir = '.'+fonts[0];
        }else if(dir3[2] === 'fonts'){
            fonts = arquivo.split("?");
            dir = '.'+fonts[0];
        }else{dir = '.'+arquivo;}
        //console.log(request.url);
        //console.log(dir)
        fs.readFile(dir, null,(err,data) =>{
            if(err){
                response.statusCode = 500;
                response.end(err.message);
            }else{
                response.statusCode = 200;
                response.setHeader('Content-Type',tipo);
                response.write(data);
                response.end();
            }
        });

        //response.statusCode = 404;
        //response.end('Arquivo não encontrado');
    }

});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});