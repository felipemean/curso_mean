//Gestor de Eventos
"use strict";
var evento = require("events");
var EmisorEventos = evento.EventEmitter;
var miEmisor = new EmisorEventos();
miEmisor.on("miEvento", functionCallback);

function functionCallback(misDatos, unValor) {
    console.log("misDatos " + misDatos.propiedad1 + ", " +
        misDatos.propiedad2 + ", unValor  " + unValor);
}
let contador = 0;

function aCadaIntervalo() {
    var param1 = {
        propiedad1: Date.now(),
        propiedad2: contador
    };
    var param2 = "Otro Valor";

    miEmisor.emit("miEvento", param1, param2);

    contador++
    if (contador > 10) {
        process.exit();
    }
}
setInterval(aCadaIntervalo, 500);