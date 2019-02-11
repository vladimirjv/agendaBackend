  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

var contactModel = new Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    createdData:{
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Contact', contactModel);