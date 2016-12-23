var Creador = function (padreDom) {
		
	this.formCalc = document.createElement("form");
	padreDom.appendChild(this.formCaj);
	
	this.cajaA = this.addInput("Caja A", "cajaA");
	this.cajaB = this.addInput("Caja B", "cajaB");
	/*this.addButton(" + ", this.suma);
	this.addButton(" - ", this.resta);
	this.addButton(" * ", this.multiplica);
	this.addButton(" / ", this.division);
	this.resultado = this.addInput("Resultado", "resultado");*/
Creador.prototype.addInput = function(texto, nombre) {		
	var texto = document.createTextNode(texto);
	this.formCaj.appendChild(texto);
	var nuevoInput = document.createElement("input");
	this.formCaj.appendChild(nuevoInput);
	this.formCaj.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}
Creador.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formCalc.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
