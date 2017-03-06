'use strict';
var mongo = require('mongodb').MongoClient;
var BSON = mongo.BSONPure;
var db1;
mongo.connect('mongodb://hola:1234@ds119810.mlab.com:19810/futbolya',function(err,db){
  if(err)
  {
    throw err;
  }
  db1=db;

  })

exports.list= function(req, res) {
    db1.collection('usuario', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get=function(req, res) {
    var id = req.params.id;
    console.log('Retrieving usuario: ' + id);
    db1.collection('usuario', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.add =function(req, res) {
    var usuario = req.body;
    console.log('Adding usuario: ' + JSON.stringify(usuario));
    db1.collection('usuario', function(err, collection) {
        collection.insert(usuario, {safe:true}, function(err, result) {
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
    console.log('Deleting usuario: ' + id);
    db1.collection('usuario', function(err, collection) {
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
