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
        });
    return apiRouter;
};
module.exports = routes;