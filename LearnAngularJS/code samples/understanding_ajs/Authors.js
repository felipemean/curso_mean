/// <reference path="angular.js" />
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller("MyController", function ($scope) {
    $scope.authors =
        [
                { 'name': 'Maruti Makwana' },
                 { 'name': 'Rahul Sharma' },
                { 'name': 'Ram Makwana' },
                { 'name': 'Scott Stark' }

        ];
});
