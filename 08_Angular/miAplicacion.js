var user = {
    name: "Juan",
    lastName: "Pascual"
}

function MiControlador($scope) {
    $scope.user = {
        name: "Juan",
        lastName: "Pascual"
    }
}

var moduloAplicacion = angular.module("miAplicacion", []);

moduloAplicacion.controller("MiControlador", MiControlador);