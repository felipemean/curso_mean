function ControladorSimple($scope, $rootScope) {
    $rootScope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietmam/Cadiz', fecha1: "", fecha2: "", dias: "" },
        { nombre: 'Sergio', ciudad: 'Madrid', fecha1: "", fecha2: "", dias: "" },
        { nombre: 'Angel', ciudad: 'Madrid', fecha1: "", fecha2: "", dias: "" },
        { nombre: 'Julio', ciudad: 'Madrid', fecha1: "", fecha2: "", dias: "" },
        { nombre: 'Pedro', ciudad: 'Madrid', fecha1: "", fecha2: "", dias: "" }
    ];
    $scope.addCliente = function() {
        $scope.misClientes.push({
            nombre: $scope.nombreCliente,
            ciudad: $scope.ciudadCliente,
            fecha1: $scope.fechinicio,
            fecha2: $scope.fechafin,
            dias: $scope.fechafin - $scope.fechainicio
        });
    }
    $rootScope.nombreCliente = "AAAAAAAAAA";
}
var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller("ControladorMuySimple", ControladorSimple);
/*
function ControladorAnimales($scope, $scope) {
    $scope.misAnimales = [
        { nombre: 'Gato', familia: 'Vietmam/Cadiz' },
        { nombre: 'Perro', familia: 'Madrid' }
    ];
    $rootScope.globalB = "BBBBBBBBBBBB";
}*/

moduloAplicacion.controller("UnControlDeAnimales", ControladorAnimales);

$scope.date = new Date();
$scope.date2 = new Date();
$scope.datefinal = $scope.date - $scope.date2 ;