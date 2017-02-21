var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persona = (function () {
    function Persona(nombre, ap1, ap2) {
        this.nombre = nombre;
        this.ap1 = ap1;
        this.ap2 = ap2;
    }
    // metodo quwe devuelve tipo string
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.ap1 + " " + this.ap2;
    };
    return Persona;
}());
var felipe = new Persona("Felipe", "Gil", "Gonzalez");
console.log(felipe.stringify());
var juan = new Persona("Juan", "Diaz", "Martín");
console.log(juan.stringify());
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    /*constructor(nombre: string, ap1:string, ap2:string, identidad: string){
        super(nombre,ap1,ap2);
        this.identidad= identidad;
    }*/
    function Ciudadano(nombre, ap1, ap2, identidad) {
        if (nombre === void 0) { nombre = null; }
        if (ap1 === void 0) { ap1 = null; }
        if (ap2 === void 0) { ap2 = null; }
        if (identidad === void 0) { identidad = "ninguna"; }
        var _this = _super.call(this, nombre, ap1, ap2) || this;
        _this.identidad = identidad;
        return _this;
    }
    Ciudadano.prototype.stringify = function () {
        return this.nombre + " " + this.identidad;
    };
    return Ciudadano;
}(Persona));
var alguien = new Ciudadano("nombre", "ap1");
var alguien2 = new Ciudadano("Fernando", "ap1");
/*
stringify(): string {
        return super.stringify() + this.identidad ;
}*/ 
