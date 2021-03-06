'use strict';
var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var URL = "mongodb://hola:1234@ds119810.mlab.com:19810/futbolya";

exports.list= function(req, res) {
    db.get().collection('usuario', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = (+req.params.id);
    console.log('Retrieving usuario: ' + id);

    db.get().collection('usuario', function(err, collection) {
        if(err)
        {
          throw err;
        }
        else{
        collection.findOne({'_id':id}, function(err, item) {
            res.send(item);
        });
    }
});
};

exports.add = function(req, res) {
    var usuario = req.body;
    console.log('Adding usuario: ' + JSON.stringify(usuario));
    console.log(req.body);
    db.get().collection('usuario', function(err, collection) {
        if(err)
        {
            throw err;
        }
        else{
        collection.insert(usuario, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
        }
    });
}

exports.delete =function(req, res) {
    var id = req.params.id;
    console.log('Deleting usuario: ' + id);
    db.collection('usuario', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
};
