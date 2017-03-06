'use strict';
var request = require('request');

var express = require('express');
var cors = require('cors');

const routes = require('./routes');

let port = 5000;
let app = express();
app.use(cors());
routes(app);

app.listen(port, () => {
  console.log('Started in port '+ port);
})
