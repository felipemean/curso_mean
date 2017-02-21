
class Persona{
    nombre: string;
    ap1: string;
    ap2: string;

    constructor(nombre: string, ap1 : string, ap2: string){
        this.nombre = nombre;
        this.ap1 = ap1;
        this.ap2 = ap2;
    }
    // metodo quwe devuelve tipo string
    stringify(): string {
        return this.nombre + " " + this.ap1 + " " + this.ap2 ;
    }
}

let felipe = new Persona("Felipe", "Gil", "Gonzalez");
console.log(felipe.stringify());

let juan = new Persona("Juan", "Diaz", "Martín");
console.log(juan.stringify());
class Ciudadano extends Persona {
    identidad: string ;
    /*constructor(nombre: string, ap1:string, ap2:string, identidad: string){
        super(nombre,ap1,ap2);
        this.identidad= identidad;
    }*/
    constructor(nombre: string= null, ap1:string= null, ap2:string= null, identidad: string= "ninguna"){
        super(nombre,ap1,ap2);
        this.identidad= identidad;
    }
    stringify(): string {
        return this.nombre + " " + this.identidad ;
    }
}



let alguien = new Ciudadano ("nombre", "ap1");
let alguien2 : Ciudadano = new Ciudadano ("Fernando", "ap1");
/*
stringify(): string {
        return super.stringify() + this.identidad ;
}*/