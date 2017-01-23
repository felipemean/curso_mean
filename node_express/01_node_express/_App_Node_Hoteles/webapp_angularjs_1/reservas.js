function ControladorCliente($scope, $scope) {
    $scope.misClientes = [
        { nombre: 'Fran', apellidos: 'Gil González', email: 'fran@gmail.com' },
        { nombre: 'Sergio', apellidos: 'Gil González', email: 'sergio@gmail.com' },
        { nombre: 'Angel', apellidos: 'Gil González', email: 'angel@gmail.com' },
        { nombre: 'Julio', apellidos: 'Gil González', email: 'julio@gmail.com' },
        { nombre: 'Pedro', apellidos: 'Gil González', email: 'Pedro@gmail.com' }
    ];
    $scope.addCliente = function() {
        $scope.misClientes.push({
            nombre: $scope.nombreCliente,
            ciudad: $scope.ciudadCliente,
            email: $scope.emailCliente
        });
    }

}

function ControladorReservas($scope, $scope) {
    $scope.reservas = [
        { habitacion: '101', fechaInicio: '10/10/2017', fechaFin: '12/10/2017', email: 'fran@gmail.com' },
        { habitacion: '102', fechaInicio: '10/10/2017', fechaFin: '12/10/2017', email: 'sergio@gmail.com' },
        { habitacion: '103', fechaInicio: '10/10/2017', fechaFin: '12/10/2017', email: 'angel@gmail.com' },
        { habitacion: '104', fechaInicio: '10/10/2017', fechaFin: '12/10/2017', email: 'julio@gmail.com' },
        { habitacion: '105', fechaInicio: '10/10/2017', fechaFin: '12/10/2017', email: 'Pedro@gmail.com' }
    ];
    $scope.addReservas = function() {
        $scope.reservas.push({
            habitacion: $scope.habitacionCliente,
            email: $scope.emailCliente,
            fechaInicio: $scope.fehaInicioCliente,
            fechaFin: $scope.fehaFinCliente
        });
    }

}


function Controladorhabitaciones($scope, $scope) {
    $scope.habitaciones = [
        { habitacion: '101', doble: 'false' },
        { habitacion: '102', doble: 'false' },
        { habitacion: '103', doble: 'false' },
        { habitacion: '104', doble: 'false' },
        { habitacion: '105', doble: 'true' },
        { habitacion: '201', doble: 'false' },
        { habitacion: '202', doble: 'false' },
        { habitacion: '203', doble: 'false' },
        { habitacion: '204', doble: 'false' },
        { habitacion: '205', doble: 'true' },
        { habitacion: '301', doble: 'false' },
        { habitacion: '302', doble: 'false' },
        { habitacion: '303', doble: 'false' },
        { habitacion: '304', doble: 'false' },
        { habitacion: '305', doble: 'true' }
    ];
    $scope.addReservas = function() {
        $scope.reservas.push({
            habitacion: $scope.habitacionCliente,
            email: $scope.emailCliente,
            fechaInicio: $scope.fehaInicioCliente,
            fechaFin: $scope.fehaFinCliente
        });
    }

}
var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller("ControladorMuySimple", ControladorSimple);
/*
function ControladorAnimales($scope, $scope) {
    $scope.misAnimales = [
        { nombre: 'Gato', familia: 'Vietmam/Cadiz' },
        { nombre: 'Perro', familia: 'Madrid' }
    ];
    $scope.globalB = "BBBBBBBBBBBB";
}*/

moduloAplicacion.controller("UnControlDeAnimales", ControladorAnimales);