'use strict';

/* Controllers */

angular.module('bobikoApp.controllers', [])
  .controller('FileCtrl', ['$scope', function($scope) {
    console.log($scope);
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
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
