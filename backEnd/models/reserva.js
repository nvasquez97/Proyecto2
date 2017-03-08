'use strict';
var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var BSON = require('bson').BSONPure
var URL = "mongodb://hola:1234@ds119810.mlab.com:19810/futbolya";

exports.list= function(req, res) {
    db.get().collection('reserva', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = (+req.params.id);
    console.log('Retrieving reserva: ' + id);

    db.get().collection('reserva', function(err, collection) {
        if(err)
        {
          throw err;
        }
        else{
        var myId = JSON.parse(req.params.id);
        collection.findOne({'_id':id}, function(err, item) {
            res.send(item);
        });
    }
});
};

exports.add = function(req, res) {
    var reserva = req.body;
    console.log('Adding reserva: ' + JSON.stringify(reserva));
    db.collection('reserva', function(err, collection) {
        collection.insert(reserva, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.update= function(req, res) {
    var id = req.params.id;
    var reserva = req.body;
    console.log('Updating reserva: ' + id);
    console.log(JSON.stringify(reserva));
    db.collection('reserva', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, reserva, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating reserva: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(reserva);
            }
        });
    });
}

exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting reserva: ' + id);
    db.collection('reserva', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
