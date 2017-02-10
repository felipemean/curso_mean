var http = require("http");
var fs = require("fs");

function enviarImagen(request, response) {

    response.writeHead(200, { "content-type": "image/jpg" });
    //fs.createReadStream("baner_web.jpg").pipe(response);
    fs.createReadStream("error.png").pipe(response);
    // console.log("server escuchando");
}

var server = http.createServer(enviarImagen);
server.listen(8888);
console.log("server escuchando");