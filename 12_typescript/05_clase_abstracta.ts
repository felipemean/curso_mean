class Geometria{
    base    : number = 1;
    altura  : number = 1;
   
    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;         
    }
}
/*
    calculaArea() : number {
         return  this.base * this.altura ; */    
class Rectangulo  extends Geometria{
         calculaArea() : number {
         return  this.base * this.altura ;
    }
}   
class Triangulo  extends Geometria{
         calculaArea() : number {
         return  this.base * this.altura / 2 ;
    }
}
    let rect : Rectangulo = new Rectangulo ( 3,4);
    let trian : Triangulo  = new Triangulo ( 190,4);

    console.log("El area es j " + rect.calculaArea());

    console.log("Area del Rectangulo: " + rect.calculaArea());
        console.log("Area del Triangulo: " + trian.calculaArea());