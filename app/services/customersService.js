(function() {
    
    var customersApp = angular.module('customersApp');

    var customersService = function() {

        var customers = [
            {
                customerId: 1, 
                name: 'Amit Tyagi', 
                city: 'The Woodlands', 
                orderTotal: 9.9956, 
                joined:'999999997791',
                orders: [
                    {
                        orderId: 1,
                        productName: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {
                customerId: 2, 
                name: 'Kapil Arora', 
                city: 'Louisvelle', 
                orderTotal: 19.99, 
                joined: '9999999997891',
                orders: [
                    {
                        orderId: 2,
                        productName: 'Baseball',
                        total: 9.995
                    },
                    {
                        orderId: 3,
                        productName: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                customerId: 3, 
                name: 'Sachin Vig', 
                city: 'New Delhi', 
                orderTotal: 29.99, 
                joined: '9999999999991',
                orders: [
                    {
                        orderId: 4,
                        productName: 'Baseball',
                        total: 19.995
                    },
                    {
                        orderId: 5,
                        productName: 'Bat',
                        total: 9.995
                    }
                ]
            }
        ]; 
        
        this.getCustomers = function() {
            return customers;
        };
        
        this.getCustomer = function(customerId) {
            for(var i = 0, len = customers.length; i < len; i++) {
                if(customers[i].customerId === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        };
        
    };

    customersApp.service('customersService', customersService);

}());