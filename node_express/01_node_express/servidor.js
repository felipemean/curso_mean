//importamos librerias
var miExpress = require("express");

//instanciar, var me devuelve una instancia
var app = miExpress();

//Ruteo
app.get("/", peticionPrincipal);

app.get("/about", peticionAbout);


function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index.html");
}

function peticionAbout(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/about.html");
}

app.listen(9000);

console.log("Servidor Lanzado");