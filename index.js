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

var apiRouter = express.Router();
apiRouter.route('/contacts')
    .get(function(req,res){
        Contact.find(function(err,contacts){
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(contacts);
            }
        });
    })
    .post(function (req,res) {
        var contact = new Contact(req.body);
        contact.save();
        res.status(201).send(contact);
    });
apiRouter.route('/contacts/:id')
    .get(function (req,res) {
        Contact.findById(req.params.id, function (err,contact) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(contact);
            }
        });
    });
app.use('/api',apiRouter);

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

