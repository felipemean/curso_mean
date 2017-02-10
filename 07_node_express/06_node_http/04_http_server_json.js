var http = require("http");
var url = require("url");
var clientes = [
    { "nombre": "Pepito", "pedido": 12 },
    { "nombre": "Tonino", "pedido": 22 },
    { "nombre": "Fermin", "pedido": 23 },
    { "nombre": "Juan", "pedido": 45 }
]
var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url);
        console.log("URL: ", miUrl.path);
        //reponse.writeHead(200, { "content-type": "text/html" });
        if (/^\/clientes\/\d/.test(request.url)) {
            var numero = parse(request.url.split('/')[2]);
            // response.end('<html><head><body><h1> Hola que tal!<br/> Me muero Felisa!</h1></body></head ></html>');
            response.end(JSON.stringify(clientes[numero]));
        } else if (/^\/clientes/.test(request.url)) {
            response.end(JSON.stringify(clientes));
        } else {
            response.end('{"mensaje": "URL mala"}');
        }
        //http://localhost/clientes/45
        //http://localhost?clientes/45
    }
);
server.listen(8888);
console.log("servidor iniciado");