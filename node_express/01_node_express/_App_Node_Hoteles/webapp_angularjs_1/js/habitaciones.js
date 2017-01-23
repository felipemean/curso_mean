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

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }

    function ControladorAReservar() {
        this.lista = Modelo.Reservas.lista;
        this.cantidad = function() {
            return Modelo.Reservas.lista.length;
        }
        this.delReservas = function(numero) {
            Modelo.Reservas.quitar(numero);
        }
    }
}

function ControladorReservas() {
    this.numero = 1;
    this.doble = false;
    this.fechainicio = "2017/01/17";
    this.fechafin = "2017/01/27";
    this.email = "fel@gmail.com"

    this.addReserva = function() {
        Modelo.Reservas.agregar({
            numero: this.numero,
            doble: this.doble,
            fechaInicio: this.fechainicio,
            fechaFin: this.fechafin,
            email: this.email
        });
        this.numero++;
    }
}
var moduloAplicacion = angular.module("habitaciones", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
moduloAplicacion.controller("AReservarController", ControladorAReservar);
moduloAplicacion.controller("ReservasController", ControladorReservas);