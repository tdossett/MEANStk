var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// Models
var Customer = mongoose.model('Customer');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

// Get All customers
router.route('/customers').get(function (req, res) {
    Customer.find(function (err, customers) {
        if (err) {
            return res.send(err);
        }
        
        res.json(customers);
    });
});

// Get One Customer by Id
router.route('/customers/:id').get(function (req, res) {
    Customer.findOne({ _id: req.params.id }, function (err, customer) {
        if (err) {
            return res.send(err);
        }
        
        res.json(customer);
    });
});

// Add new customer
router.route('/customers').post(function (req, res) {
    var customer = new Customer(req.body);
    
    customer.save(function (err) {
        if (err) {
            return res.send(err);
        }
        
        res.send({ message: 'Customer Added' });
    });
});

// Update customer
router.route('/customers/:id').put(function (req, res) {
    Customer.findOne({ _id: req.params.id }, function (err, customer) {
        if (err) {
            return res.send(err);
        }
        
        // update the customers info
        customer.Id = req.body.Id;
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.email = req.body.email;
        customer.password = req.body.password;
        
        // save the customer
        customer.save(function (err) {
            if (err) {
                return res.send(err);
            }
            
            res.json({ message: 'Customer updated!' });
        });
    });
});

// Delete customer
router.route('/customers/:id').delete(function (req, res) {
    Customer.remove({
        _id: req.params.id
    }, function (err, customer) {
        if (err) {
            return res.send(err);
        }
        
        res.json({ message: 'Customer successfully deleted' });
    });
});

module.exports = router;