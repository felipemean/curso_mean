class Persona2{
    nombre:                 string;
    ap1:                    string;
    ap2:                    string;
    static totalPersonas:   number = 0;

    constructor(nombre: string ="", 
        ap1 : string="",
        ap2: string= "")
        {
        this.nombre = nombre;
        this.ap1 = ap1;
        this.ap2 = ap2;

        Persona2.totalPersonas++;
    }
    // metodo que devuelve tipo string
    stringify(): string {
        return this.nombre + " " + this.ap1 + " " + this.ap2 ;
    }
}

Persona2.totalPersonas = 0;
let persona1 = new Persona2("Felipe", "Gil", "Gonzalez");

console.log(persona1.stringify() + " : Es la persona : " +Persona2.totalPersonas);

let persona2 = new Persona2("Juan", "Diez", "Veinte");
console.log(persona2.stringify()+ " : Es la persona : " +Persona2.totalPersonas);

console.log("totalPersonas" + Persona2.totalPersonas);

