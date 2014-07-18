'use strict';

/* Directives */


angular.module('bobikoApp.directives', [])
.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
}])
.directive('onReadFile', ['$scope', function($scope){
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $scope(attrs.onReadFile);



            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);

                console.log(element)
            });
        }
    };
}]);
