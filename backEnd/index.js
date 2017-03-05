var request = require('request');
var mongo = require('mongodb').MongoClient;
var express = require('express');
var cors = require('cors');

const routes = require('./routes');

let port = 5000;
let app = express();
app.use(cors());
mongo.connect('mongodb://localhost:27017/FutbolYa',function(err,db){
  if(err)
  {
    throw err;
  }

    db.collection('reserva').find().toArray(function(err,result)
    {
      if(err)
      {
        throw err;
      }
      console.log(result);
    })
  })
//routes(app);

app.listen(port, () => {
  console.log('Started in port '+ port);
})
