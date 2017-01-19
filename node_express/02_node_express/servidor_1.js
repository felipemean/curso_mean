//importamos librerias
var miExpress_1 = require("express");

//instanciar, var me devuelve una instancia
var app = miExpress_1();

//Ruteo
app.get("/", peticionPrincipal);

app.get("/expresiones", peticionExpresiones);
app.get("/directivas", peticionDirectivas);
app.get("/filtros", peticionFiltros);
app.get("/ordenamiento", peticionOrdenamiento);
app.get("/controlador", peticionControlador);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/index.html");
}

function peticionExpresiones(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/01_NG1_expresiones.html");
}

function peticionDirectivas(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/02_NG1_directivas.html");
}

function peticionFiltros(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/03_NG1_filtros.html");
}

function peticionOrdenamiento(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/04_NG1_ordenamiento.html");
}

function peticionControlador(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/privado/05_NG1_controlador.html");
}

app.listen(9001);

console.log("Servidor Lanzado");