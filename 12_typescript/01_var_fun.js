// nodejs no interpreta typscript
// transpirarlo con tsc file
var variable;
var cadena;
var bol;
variable = 2017;
bol = true;
var variableASaberQueContiene;
variableASaberQueContiene = 34;
variableASaberQueContiene = "Texto";
//variable ="Una cadena";s
console.log("Probando typescript");
var miCumple = { dia: 7, mes: 10, anio: 1982 };
console.log("El dia de mi miCumple: " + miCumple.dia);
// ver rangos
function concatenar(texto1, texto2) {
    var resultado = texto1 + texto2;
    return resultado;
}
console.log(concatenar("Felipe ", "Gil"));
console.log(concatenar("miCumple es  ", "Mañana"));
function cumplir(tiempo) {
    tiempo.anio++;
}
cumplir(miCumple);
console.log("El año de mi miCumple: " + miCumple.anio);
var miUnion;
//miUnion= "puede ser cadena ";
// miUnion = 3005;
miUnion = true;
function recibeEnumerado(param) {
    console.log(param);
}
recibeEnumerado("C1");
