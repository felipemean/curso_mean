// carga del modulo
var mongoose = require("mongoose");
// conectar a la base de datos
mongoose.connect("mongodb://localhost/db_libros");
// Genero el modelo
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
});
// http://mongoosejs.com/docs/schematypes.html

var esdla = new Libro({
    titulo: "De aquí a la eternidad",
    autor: "john",
    paginas: 1500
});
esdla.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error)
    } else {
        console.log("Pelicula guardada " + esdla._id)
    }
});