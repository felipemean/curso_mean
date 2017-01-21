function ControladorSimple($scope, $scope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietmam/Cadiz', edad: '24' },
        { nombre: 'Sergio', ciudad: 'Madrid', edad: '19' },
        { nombre: 'Angel', ciudad: 'Madrid', edad: '34' },
        { nombre: 'Julio', ciudad: 'Madrid', edad: '55' },
        { nombre: 'Pedro', ciudad: 'Madrid', edad: '70' }
    ];
    $scope.addCliente = function() {
            $scope.misClientes.push({
                nombre: $scope.nombreCliente,
                ciudad: $scope.ciudadCliente,
                edad: $scope.edadCliente
            });
        }
        //  $scope.nombreCliente = "AAAAAAAAAA";
    $scope.cambiarClienteFuera = function() {
        $scope.misClientes.reverse({
            nombre: $scope.nombreCliente,
            ciudad: $scope.ciudadCliente,
            edad: $scope.edadCliente
        });
    }
}
var moduloAplicacion = angular.module("listaReserva", []);

moduloAplicacion.controller("ControladorMuySimple", ControladorSimple);

function ControladorAnimales($scope, $scope) {
    $scope.misAnimales = [
        { nombre: 'Gato', familia: 'Vietmam/Cadiz' },
        { nombre: 'Perro', familia: 'Madrid' },
        { nombre: 'Leon', familia: 'Corea' }
    ];
    // $scope.globalB = "BBBBBBBBBBBB";
}

moduloAplicacion.controller("UnControlDeAnimales", ControladorAnimales);

moduloAplicacion.controller("ControladorX", ControladorCopy);

function ControladorCopy($scope, $scope) {
    $scope.clickCounter = 0;
    $scope.check = function() {
        $scope.clickCounter++;
    }
};

moduloAplicacion.controller("ControladorCheques", ControladorCheche);

function ControladorCheche($scope, $scope) {
    $scope.Contador = 0;
    $scope.chequeando = function() {
        $scope.Contador++;
    }
};