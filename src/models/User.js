const mongoose = require('mongoose');

const User = mongoose.Schema({
    email: {
        type: String
    },
    address:{
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('user', User);