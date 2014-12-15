(function() {
    
    var customersApp = angular.module('customersApp');

    var customersFactory = function($http) {

        var factory = {};
        
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        factory.getOrders = function() {
            return $http.get('/orders');
        };
        
        return factory;
    };

    customersApp.factory('customersFactory', [ '$http', customersFactory ]);

}());