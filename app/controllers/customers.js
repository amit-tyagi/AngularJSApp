(function() {

    var customersApp = angular.module('customersApp');

    var CustomersController = function($scope, $log, customersFactory, appSettings) {
        // default values
        $scope.sortBy = 'customerId';
        $scope.reverse = false;
        $scope.customers = []; 
        $scope.appSettings = appSettings;
        
        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, header, config) {
                    // handle errors
                    $log.log(data.error + ' ' + status);
                });
        }
        
        init();
    
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    customersApp.controller('CustomersController', 
                            ['$scope', '$log', 'customersFactory', 'appSettings', CustomersController]);

}());