var funcionAnonima = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonima(4, 6));
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonima(10, 6));
console.log(funcionLambda(19, 6));
var PI = 3.1415927;
var _a = { var1: "valor1", var2: "valor2" }, var1 = _a.var1, var2 = _a.var2;
console.log("Numero PI :  " + PI + "  " + var1 + "  " + var2);
var obj = { var3: "valor   3333 1", var4: "valor    432" };
var var3 = obj.var3, var4 = obj.var4;
console.log("variabkes:  " + PI + "---------  " + var1 + " -------- " + var2 + var3 + "  " + var4);
function camposPorConsola(c1, c2) {
    var elRestoPorConsola = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoPorConsola[_i - 2] = arguments[_i];
    }
    console.log(c1);
    console.log(c2);
    console.log(elRestoPorConsola);
    console.log("Mostramos todo");
    {
        for (var pos in elRestoPorConsola) {
            console.log("El campo en la posicion " + pos + "\n\t es " + elRestoPorConsola[pos]);
        }
    }
}
camposPorConsola("Una Cadena", "otra Cadena", "AAAAAA", 23, 45, true, " La ultima cadena");
