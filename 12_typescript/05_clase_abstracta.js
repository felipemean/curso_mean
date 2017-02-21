var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Geometria = (function () {
    function Geometria(base, altura) {
        this.base = 1;
        this.altura = 1;
        this.base = base;
        this.altura = altura;
    }
    return Geometria;
}());
/*
    calculaArea() : number {
         return  this.base * this.altura ; */
var Rectangulo = (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Geometria));
var Triangulo = (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangulo.prototype.calculaArea = function () {
        return this.base * this.altura / 2;
    };
    return Triangulo;
}(Geometria));
var rect = new Rectangulo(3, 4);
var trian = new Triangulo(190, 4);
console.log("El area es j " + rect.calculaArea());
console.log("Area del Rectangulo: " + rect.calculaArea());
console.log("Area del Triangulo: " + trian.calculaArea());
