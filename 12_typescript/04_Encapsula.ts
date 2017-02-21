class Padre {
    private propPrivada : number = 0;
    public propPublica : number = 0;
    private static totalPersonas:   number = 0;
    protected propProtegida : number = 7;
    dameProPrivada(){
        return this.propPrivada;
    }
}
let tuPadre: Padre = new Padre();
// propiedad solo accesible desde la clase
// tuPadre.propPrivada = 34;

tuPadre.dameProPrivada();
tuPadre.propPublica = 34;

class HijoDePadre extends Padre {
    constructor(otroValor:number){
        super();
        this.propPublica=55;
        this.propProtegida = 66;
    }
}
let tuHijoSiTienes : HijoDePadre = new HijoDePadre(89);
tuHijoSiTienes.propPublica = 7;
/*
class Nieto extends HijoDePadre {
    constructor(masValor: number){
        super();
        this.
    }
}
*/