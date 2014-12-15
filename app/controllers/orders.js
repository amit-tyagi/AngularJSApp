(function() {
    
    var customersApp = angular.module('customersApp');

    var OrdersController = function($scope, $routeParams, customersFactory) {
        // default values
        var customerId = $routeParams.customerId;
        $scope.selectedCustomer = null;
        
        function init() {
            // Search for the customer for the customer id
            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.selectedCustomer = customer;
                })
                .error(function(data, status, header, config) {
                    // handle errors
                });
        }

        init();
    };

    customersApp.controller('OrdersController', 
                ['$scope', '$routeParams', 'customersFactory', OrdersController]);

}());