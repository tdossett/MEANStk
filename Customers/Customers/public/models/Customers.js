var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    Id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

mongoose.model('Customer', CustomerSchema);