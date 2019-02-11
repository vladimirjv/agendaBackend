var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var db = mongoose.connect('mongodb://localhost/stackcode');
// mongoose.connect('mongodb://localhost/stackcode');
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
apiRouter.route('/')
    .get(function(req,res){
        res.json({
            message: "hello"
        });
    });
apiRouter.route('/contacts')
    .get(function(req,res){
        Contact.find(function(err,contacts){
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(contacts);
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

