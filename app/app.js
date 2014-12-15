(function() {
    
    var customersApp = angular.module('customersApp', ['ngRoute', 'ngAnimate']);
    
    customersApp.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when("/orders/:customerId", {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .when("/orders", {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .when("/users", {
                controller: 'UsersController',
                templateUrl: 'app/views/users.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());