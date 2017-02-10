var http = require("http");
var url = require("url");

var server = http.createServer(
        (request, response) => {
            var miUrl = url.parse(request.url);
            console.log("URL: ", miUrl.path);
            //reponse.writeHead(200, { "content-type": "text/html" });
            if (/^\/clientes\/\d/.test(request.url)) {
                var numero = request.url.split('/' [2]; response.end('<html><head><body><h1> Hola que tal!<br/> Me muero Felisa!</h1></body></head ></html>');

                }
                else {
                    response.end('<html><head><body><h1> Hola Cliente N!<br/> Welcome!</h1></body></head ></html>');
                }



                //http://localhost/clientes/45
                //http://localhost?clientes/45
            }
        ); server.listen(8888); console.log("servidor iniciado");