'use strict';
var request = require('request');
var db = require('./db');
var express = require('express');
var cors = require('cors');
var body=require('body-parser');

const routes = require('./routes');

let port = process.env.PORT ||5000;
let app = express();

app.use(cors());
app.use(body());
routes(app);
db.connect('mongodb://hola:1234@ds119810.mlab.com:19810/futbolya',function(err){
  if(err)
  {
    console.log('Unable to connecto to Mongo')
  }
  })
app.listen(port, () => {
  console.log('Started in port '+ port);
})
