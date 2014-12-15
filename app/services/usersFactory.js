(function() {
    
    var customersApp = angular.module('customersApp');

    var usersFactory = function($http) {
        
        var users = [
            {
                "active": true,
                "createdTs": 1410122530000,
                "createdId": "QWL",
                "modifiedTs": 1410122530000,
                "modifiedId": "AJT",
                "userId": 1,
                "userName": "QWL",
                "firstName": "Amit",
                "lastName": "Tyagi",
                "email": "atyagi@marathonoil.com"
            },
            {
                "active": true,
                "createdTs": 1410122530000,
                "createdId": "AJT",
                "modifiedTs": 1410122530000,
                "modifiedId": "AJT",
                "userId": 2,
                "userName": "AJT",
                "firstName": "Varun",
                "lastName": "Garg",
                "email": "vgarg@marathonoil.com"
            },
            {
                "active": true,
                "createdTs": 1418506930000,
                "createdId": "QWL",
                "modifiedTs": 1418506930000,
                "modifiedId": "QWL",
                "userId": 3,
                "userName": "TTE",
                "firstName": "Maria",
                "lastName": "Matthew",
                "email": "mmattew@marathonoil.com"
            }
        ];
        
        var factory = {};
        
        factory.getUsers = function() {
            return users;
        };
            
        return factory;
    };

    customersApp.factory('usersFactory', ['$http', usersFactory]);

}());