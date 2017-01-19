var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");


var nuevaFractoria = new FactoriaFiguras();
/*
var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
var vistaRectangulo2 = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");
var vistaElipse = new FiguraVistaV2(padreCalcElipse, "Elipse");
var vistaHuevo = new FiguraVistaV2(padreCalcHuevo, "Huevo");
*/
/*
var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
var controlRectangulo2 = new FiguraControlador(vistaRectangulo2, Modelo.Rectangulo);
var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlHuevo = new FiguraControlador(vistaHuevo, Modelo.Huevo);     
*/

var opTrianguloV2 = { padreDOM: padreCalcRectangulo, tipoVista: "v2", tipoFigura: "triangulo" };
var opElipseNormal = { padreDOM: padreCalcElipse, tipoFigura: "elipse" };

var opElipseV2 = { padreDOM: padreCalcElipse, tipoVista: "v2", tipoFigura: "elipse" };

nuevaFractoria.crearControlFigura({ padreDOM: padreCalcRectangulo }); // Controlador Rectangulo con vista Normal
nuevaFractoria.crearControlFigura({ padreDOM: padreCalcRectangulo, tipoFigura: "v2" });
nuevaFractoria.crearControlFigura({ padreDOM: padreCalcTriangulo, tipoFigura: "triangulo" });
nuevaFractoria.crearControlFigura(opElipseNormal);
nuevaFractoria.crearControlFigura(opElipseV2);