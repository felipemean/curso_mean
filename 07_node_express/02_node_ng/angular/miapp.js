function ControladorSimple($scope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'La línea' },
        { nombre: 'Juan', ciudad: 'Madrid' },
        { nombre: 'Felipe', ciudad: 'Zaragoza' },
        { nombre: 'Julio', ciudad: 'Tenerife' }
    ];

    $scope.nombreCliente = "Texto desde JS";
    $scope.nombreAnimal = "Texto adicional desde JS";
}

var moduloAplicacion = angular.module("miapp", []);

moduloAplicacion.controller('ControladorMuySimple', ControladorSimple);