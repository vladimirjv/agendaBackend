var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
//serve instance
var app = express();
//serve port
var port = process.env.PORT || 3000;
//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// mongoose connection
var db = mongoose.connect(process.env.MONGODB_URI || 'mongodb://vladimirjv:cetmar07059669@ds331135.mlab.com:31135/heroku_h34kk55n');
var Contact = require('./Models/contactModel');
// router
var contactRouter = require('./Routes/contacts.routes')(Contact);
app.use('/api/contacts', contactRouter);


app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(port, function () {
    console.log('App listening on port '+port);
});

