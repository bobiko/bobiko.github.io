angular.module('app')
    .controller('InboxCtrl', function InboxCtrl($scope, InboxFactory){
        'use strict';
        $scope.meta = {
            title: 'MyInbox'
        };

        // InboxFactory.getMessages()
        //     .success(function(jsonData, statusCode) {
        //         console.log('success', statusCode);
        //         console.dir(jsonData);

        //         $scope.data = {
        //             emails : jsonData
        //         };
        //     });

        console.info('inbox loaded');
    });
