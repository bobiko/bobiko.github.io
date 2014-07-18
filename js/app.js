'use strict';


// Declare app level module which depends on filters, and services
angular.module('bobikoApp', [
  'ngRoute',
  'bobikoApp.filters',
  'bobikoApp.services',
  'bobikoApp.directives',
  'bobikoApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'FileCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/phones', {templateUrl: 'partials/phones.html', controller: 'Phones'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
