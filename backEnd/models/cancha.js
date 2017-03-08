'use strict';
//Tomado de: https://gist.github.com/iksose/9401758

var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var BSON = require('bson').BSONPure
var URL = "mongodb://hola:1234@ds119810.mlab.com:19810/futbolya";


exports.list= function(req, res) {
    db.get().collection('cancha', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = (+req.params.id);
    console.log('Retrieving cancha: ' + id);

    db.get().collection('cancha', function(err, collection) {
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

exports.getCanchas = function(req, res) {
    var id = (+req.params.idlocalidad);
    var tipo = (+req.params.tipo);
    console.log('Retrieving cancha: ' + id);
    db.get().collection('cancha', function(err, collection) {
        if(err)
        {
          throw err;
        }
        else{
        collection.findOne({'id_localidad':id,'tipo':tipo}, function(err, item) {
            res.send(item);
        });
    }
});
};

exports.add =function(req, res) {
    var cancha = req.body;
    console.log('Adding cancha: ' + JSON.stringify(cancha));
    db.collection('cancha', function(err, collection) {
        collection.insert(cancha, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};

exports.delete =function(req, res) {
    var id = req.params.id;
    console.log('Deleting cancha: ' + id);
    db.collection('cancha', function(err, collection) {
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
