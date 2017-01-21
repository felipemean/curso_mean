 var mymodule = angular.module("mymodule", []);
        mymodule.controller("x", function ($scope) {
            $scope.clickCounter = 0;
            $scope.check = function () {
                $scope.clickCounter++;
            }
        });