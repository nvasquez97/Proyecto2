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
    db1.collection('reserva', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.get = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving reserva: ' + id);
    db.collection('reserva', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
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