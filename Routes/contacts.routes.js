var express = require('express');

var routes = function (Contact) {
    var apiRouter = express.Router();
    apiRouter.route('/')
        .get(function (req, res) {
            Contact.find(function (err, contacts) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(contacts);
                }
            });
        })
        .post(function (req, res) {
            var contact = new Contact(req.body);
            contact.save();
            res.status(201).send(contact);
        });
    apiRouter.route('/:id')
        .get(function (req, res) {
            Contact.findById(req.params.id, function (err, contact) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(contact);
                }
            });
        })
        .put(function (req,res) {
            Contact.findById(req.params.id, function (err, contact) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    contact.name = req.body.name;
                    contact.phone = req.body.phone;
                    contact.email = req.body.email;
                    contact.save();
                    res.json(contact);
                }
            });
        })
        .delete(function (req,res) {
            Contact.remove({
                _id:req.params.id
            }, function (err,contact) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        message: 'Successfully deleted'
                    });
                }
            });
        });
    return apiRouter;
};
module.exports = routes;