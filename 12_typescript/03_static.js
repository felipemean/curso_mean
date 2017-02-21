var Persona2 = (function () {
    function Persona2(nombre, ap1, ap2) {
        if (nombre === void 0) { nombre = ""; }
        if (ap1 === void 0) { ap1 = ""; }
        if (ap2 === void 0) { ap2 = ""; }
        this.nombre = nombre;
        this.ap1 = ap1;
        this.ap2 = ap2;
        Persona2.totalPersonas++;
    }
    // metodo que devuelve tipo string
    Persona2.prototype.stringify = function () {
        return this.nombre + " " + this.ap1 + " " + this.ap2;
    };
    return Persona2;
}());
Persona2.totalPersonas = 0;
Persona2.totalPersonas = 0;
var persona1 = new Persona2("Felipe", "Gil", "Gonzalez");
console.log(persona1.stringify() + " : Es la persona : " + Persona2.totalPersonas);
var persona2 = new Persona2("Juan", "Diez", "Veinte");
console.log(persona2.stringify() + " : Es la persona : " + Persona2.totalPersonas);
console.log("totalPersonas" + Persona2.totalPersonas);
