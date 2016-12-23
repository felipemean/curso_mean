var Figura = function (padreDom) {
	
	var creaDOM = new CreadorDOM();
	this.formFig = document.createElement("form");
	padreDom.appendChild(this.formFig);
	
	this.ancho = creaDOM.addInput(this.formFig, "Ancho", "ancho");
	this.alto = creaDOM.addInput(this.formFig, "Alto", "alto");
	this.addButton(" / ", this.area);
	this.resultado = creaDOM.addInput(this.formFig, "Resultado", "resultado");
}
Figura.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.formFig.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
Figura.prototype.area = function() {
	this.resultado.value =   parseInt(this.ancho.value) 
						   * parseInt(this.alto.value);
}