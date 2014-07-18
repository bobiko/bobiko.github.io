'use strict';

/* Directives */


angular.module('bobikoApp.directives', []).
directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
}]);
directive('ngFileSelect',['data',  function(data) {
    return function($scope, e) {
        el.bind("change", function(e){
            $scope.file = (e.srcElement || e.target).files[0];
            $scope.getFile();
        });
    }
}]);
