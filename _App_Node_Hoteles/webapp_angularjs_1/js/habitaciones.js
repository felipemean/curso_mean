function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;
    this.fechainicio = "2017-01-01";
    this.fechafin = "2017-12-31";
    this.email = "felipe@gmail.com";
    this.dias = 1;


    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble,
            fechainicio: this.fechainicio,
            fechafin: (this.fechainicio + this.dias),
            email: this.email,
            dias: this.dias
        });
        this.numero++;
    }
}
var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);