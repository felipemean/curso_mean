// Funcion que, por su estructura interna, es un constructor.
// Será sólo un constructor cuando se le llame con new. 
function Calculadora(oper1,oper2,op) {

	this.oper1=oper1;
	this.oper2=oper2;
	this.op=op;
}	
calcula function () {	
	switch(this.op){
		+:
		var suma = this.oper1 + this.opr2;
		break;
		-:
		var resta = this.oper1 - this.opr2;	
		break;
		*:
		var suma = this.oper1 * this.opr2;
		break;
		/:
		var resta = this.oper1 / this.opr2;
		break;
		default:
			
}
NuestroReloj.prototype.comenzarReloj = function () {
	// Con this llamamos a otros métodos del objeto
	this.pararReloj();	
	this.mostrarFechaHora();			
}
NuestroReloj.prototype.mostrarFechaHora = function() {
	var ahora = new Date();			
	var valorHora 	 = "" + ahora.getHours() +":"+ahora.getMinutes()+":"+	ahora.getSeconds() + " (" + this.idReloj + ")";
	this.cajaTexto.value = valorHora;		
	// Llamamos al metodo mostrarFechaHora del elemento cuyo id es el mío,
	// por que el idReloj correspendo con el índice del array
	timerID = setTimeout("NuestroReloj.prototype.listaRelojes[" 
		+ this.idReloj + "].mostrarFechaHora()", 1000);	
	
	this.timerFuncionando = true;
}	