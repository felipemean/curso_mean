//Implementa tress classes , geometria, triangulo,y rectangulo, en TS, con dos parametros:
// base y altura y un metodo calculaArea()

class Geometria{
    base    : number = 1;
    altura  : number = 1;
   

    constructor(base:number=1, altura:number=1){
        this.base = base;
        this.altura = altura;         
    }

    calculaArea() : number {
         return  this.base * this.altura ;
    }
    
    let area  = new Geometria( 3,4);

    console.log("El area es " + area.calculaArea);