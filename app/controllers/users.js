(function() {

    var customersApp = angular.module('customersApp');

    var UsersController = function($scope, usersFactory) {
        // default values
        $scope.users = usersFactory.getUsers();
    };

    customersApp.controller('UsersController', 
                            ['$scope', 'usersFactory', UsersController]);

}());