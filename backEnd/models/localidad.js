var mongo = require('mongodb').MongoClient;
var db1;
mongo.connect('mongodb://localhost:27017/FutbolYa',function(err,db){
  if(err)
  {
    throw err;
  }
  db1=db;

  })

exports.list= function(req, res) {
    db1.collection('localidad', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving localidad: ' + id);
    db.collection('localidad', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
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