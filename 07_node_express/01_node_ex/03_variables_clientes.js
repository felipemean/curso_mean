var miExpress = require("express");
// Instanciar
var app = miExpress();

app.get("/clientes/:idCliente?/facturas/:idFactura",
 (request, response) => {
   //console.log("Visto " + request.originalUrl + " REserva pedida de " + idCliente);
    response.send("Resultados : \n\tcliente:  "  +
     request.params.idCliente +    "\n\Factura: " +
      request.params.idFactura + "\n" +
            JSON.stringify(request.params) );
}
);

app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
});

app.listen(9000);

console.log("Servidor express lanzado");