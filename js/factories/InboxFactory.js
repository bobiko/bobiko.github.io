angular.module('app')
    .factory('InboxFactory', function InboxFactory($q, $http, $location) {
        'use strict';

        var exports = {};

        exports.messages = [];

        exports.goToMessage = function(id) {
            if(angular.isNumber(id)) {
                // $location.path('inbox/email'+id);
            }
        };

        exports.deleteMessage = function(id, index) {
            this.message.splice(index,1);
        }

        exports.getMessages = function() {
            var deferred = $q.defer();
            return $http.get('json/emails.json')
                .success(function(data){
                    exports.messages = data;
                    deferred.resolve(data);
                })
                .error(function(data){
                    deferred.reject(data);
                    console.error('error', $data);
                });
            return deferred.promise;
        };

        return exports;
    })
