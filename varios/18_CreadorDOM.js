function CreadorDOM () {
}
CreadorDOM.prototype.addInput = function(formFig,texto, nombre) {		
	var texto = document.createTextNode(texto);
	formFig.appendChild(texto);
	var nuevoInput = document.createElement("input");
	formFig.appendChild(nuevoInput);
	formFig.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}