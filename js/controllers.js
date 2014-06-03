'use strict';

/* Controllers */

angular.module('bobikoApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('Phones', function($scope) {
    $scope.phones = [
        {
            brand: 'nokia',
            model: 'Lumia 990'
        },
        {
            brand: 'nokia',
            model: 'Lumia 1100'
        }
    ];
});
