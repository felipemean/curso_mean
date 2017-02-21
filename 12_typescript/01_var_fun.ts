// nodejs no interpreta typscript
// transpirarlo con tsc file
let variable  : number;
let cadena : string;
let bol : boolean;
variable = 2017;
bol = true;
let variableASaberQueContiene : any;
variableASaberQueContiene = 34;
variableASaberQueContiene = "Texto";
//variable ="Una cadena";s
console.log("Probando typescript");

interface Tiempo {
    dia : number,
    mes : number,
    anio: number
}

var miCumple : Tiempo = { dia: 7, mes: 10, anio: 1982};
console.log("El dia de mi miCumple: " +  miCumple.dia);
// ver rangos
function concatenar(texto1: string, texto2){
    let resultado: string = texto1 + texto2;
    return resultado
}

console.log(concatenar("Felipe ", "Gil"));
console.log(concatenar("miCumple es  ", "Mañana"));

function cumplir(tiempo){
    tiempo.anio++;
}
cumplir(miCumple);
console.log("El año de mi miCumple: " +  miCumple.anio);
let miUnion : number | string | boolean;
//miUnion= "puede ser cadena ";
// miUnion = 3005;
miUnion = true;

function recibeEnumerado( param : "C1" | "C2" | "C3"){
    console.log(param);
}
recibeEnumerado("C1");
