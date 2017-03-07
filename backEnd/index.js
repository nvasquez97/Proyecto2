/*bien por el uso de strict*/
'use strict';
var request = require('request');

var express = require('express');
var cors = require('cors');

const routes = require('./routes');

let port = process.env.PORT ||5000;
let app = express();

app.use(cors());
routes(app);

app.listen(port, () => {
  console.log('Started in port '+ port);
})
