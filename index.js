var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var db = mongoose.connect('mongodb://vladimirjv:cetmar07059669@ds331135.mlab.com:31135/heroku_h34kk55n');
// mongoose.connect('mongodb://vladimirjv:cetmar07059669@ds331135.mlab.com:31135/heroku_h34kk55n');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('Entramos!');
// });

var Contact = require('./Models/contactModel');

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var contactRouter = require('./Routes/contacts.routes')();
var contactRouter = require('./Routes/contacts.routes')(Contact);
app.use('/api/contacts', contactRouter);

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

