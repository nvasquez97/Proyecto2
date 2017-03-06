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
    db1.collection('cancha', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
