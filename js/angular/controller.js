'use strict';
var myApp = angular.module('myApp', []);

myApp.bobikoFirstCtrl = function ($scope) {

    $scope.name = '...';

    $scope.klik = function() {
         $scope.name = 'bobiko';
    }
};
