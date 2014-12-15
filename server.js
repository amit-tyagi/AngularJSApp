var express = require('express');

app = express();

app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for(var i = 0, len = customers.length; i < len; i++) {
        if(customers[i].customerId === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
//    res.status(500).json({ error: 'An error has occured!' });
});

app.get('/orders', function(req, res) {
    res.json(orders);
});

app.listen(8080);

console.log('Express listening on port 8080');

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

var orders = [
    {
        orderId: 1,
        productName: 'Shoes',
        total: 9.9956
    },
    {
        orderId: 2,
        productName: 'Baseball',
        total: 9.995
    },
    {
        orderId: 3,
        productName: 'Bat',
        total: 9.995
    },
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
];
