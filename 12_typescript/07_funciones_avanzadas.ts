let funcionAnonima = function(uno, dos: any) {
    return uno + dos;
}
console.log(funcionAnonima(4,6));

let funcionLambda = ( uno: number, dos : number) => {
    return uno +dos;
}
console.log(funcionAnonima(10,6));
console.log(funcionLambda(19,6));

const PI = 3.1415927;

let{var1,var2} = {var1: "valor1", var2: "valor2"};
console.log("Numero PI :  " + PI + "  " + var1 + "  "+ var2);

let obj = {var3: "valor   3333 1", var4: "valor    432"}
let{var3,var4} = obj;
console.log("variabkes:  " + PI + "---------  " + var1 + " -------- "+ var2+ var3+ "  "+ var4);

function camposPorConsola(c1: string, c2: string, ...elRestoPorConsola){

    console.log(c1);
    console.log(c2);
    console.log(elRestoPorConsola);
    console.log("Mostramos todo"); {
         for (let pos in elRestoPorConsola){
             console.log("El campo en la posicion " + pos + "\n\t es " + elRestoPorConsola[pos]);
         }
    }    
}
camposPorConsola("Una Cadena", "otra Cadena", "AAAAAA", 23, 45, true," La ultima cadena");