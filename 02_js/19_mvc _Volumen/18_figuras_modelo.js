function calcularDeVerdadAreaTriangulo(ancho, alto) {
    return ancho * alto / 2;
}

var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; },
        calcularDeVerdadVolumen: function(ancho, alto, profundo) { return ancho * alto * profundo; }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundo) {
            return (ancho / 2) * (alto / 2) * Math.PI * profundo;
        }
    },
    Huevo: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundo) {
            return (ancho / 2) * (alto / 2) * Math.PI * profundo;
        }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },
    calcularDeVerdadVolumenTriangulo: function(ancho, alto, profundo) {
        return ancho * alto / 2 * profundo;
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; },
        calcularDeVerdadVolumen: calcularDeVerdadVolumenTriangulo
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: calcularDeVerdadAreaTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; },
        calcularDeVerdadVolumen: calcularDeVerdadVolumenTriangulo
    }
};