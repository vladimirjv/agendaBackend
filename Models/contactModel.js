  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

var contactModel = new Schema({
    nombre: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    createdData:{
        type: Date
    }
});
module.exports = mongoose.model('Contact', contactModel);