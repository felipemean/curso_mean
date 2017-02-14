//acceso a mongoDB con MongoCliente
var ClienteMongo = require("mongodb").MongoCliente;
//modulo de pruebas
var assert = require("assert");

var url = "mongodb://localhost:27017/db";

//Crear objeto principal de reservas, conexiones 
var modelo = {
    acceder: function(accion, miCallback){
        ClienteMongo.connect(url, function(err, db){
            assert.equal(null, err);
            console.log("Conexion a la bbdd correcta");

            modelo.reservas[accion](db, function(resultado){
                console.log("Cerrar bbdd ");
                db.close();
                if (typeof miCallback == "function"){
                    miCallback(resultado);
                }
            })
        }) 
    },
    reservas: {
        insertarBase: function(db, datosReservas,  callback){
            var coleccion = db.colleccion("reservas");

            coleccion.insert(datosReservas,function(err) [
                { cliente: "Pepito" , habitacion : 1},
                 { cliente: "Otrocliente" , habitacion : 2},
                  { cliente: "Manuel" , habitacion : 3}
            ],
            function(err, documentos){
                assert.equal(err, null);
                assert.equal(3, documentos.result.n);
                assert.equal(3, documentos.ops.length);

                console.log("Insertadas Reservas");
                callback(documentos);
            });
        },
        leerReservas: function(db, callback){
            
        }
    }
}

//exportarlo un objeto modelo
modelo.acceder("insertarBase", (datosInsertados) => {
    console.log("Se han insertado datos");
});
module.exports = modelo;
