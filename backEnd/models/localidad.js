'use strict';
var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var URL = "mongodb://hola:1234@ds119810.mlab.com:19810/futbolya";

exports.list= function(req, res) {
    db.get().collection('localidad', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = (+req.params.id);
    console.log('Retrieving localidad: ' + id);

    db.get().collection('localidad', function(err, collection) {
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
    var localidad = req.body;
    console.log('Adding localidad: ' + JSON.stringify(localidad));
    db.collection('localidad', function(err, collection) {
        collection.insert(localidad, {safe:true}, function(err, result) {
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
    var localidad = req.body;
  /*podrian pasar el id por el json no? pues la localidad sabe su id**/
    console.log('Updating localidad: ' + id);
    console.log(JSON.stringify(localidad));
    db.collection('localidad', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, localidad, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating localidad: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(localidad);
            }
        });
    });
}

exports.delete = function(req, res) {
    var id = req.params.id;
    console.log('Deleting localidad: ' + id);
    db.collection('localidad', function(err, collection) {
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
