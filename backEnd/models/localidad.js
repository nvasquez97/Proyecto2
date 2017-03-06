const thinky = require('../db');

const r = thinky.r;
const type = thinky.type;


var Localidad = thinky.createModel('Localidad', {
  id: type.int(),
  ubicacion: type.string()
});

exports.Localidad = Localidad;


exports.list = (req, res) => {
  Localidad
  .run()
  .then(localidades => {
    res.json(localidades);
  })
  .error(err => {
    res.status(500);
    res.send();
  })
}

exports.get = (req, res) => {
  Localidad
  .get(req.params.id)
  .then(localidad => {
    res.json(localidad);
  })
  .error(err => {
    res.status(404);
    res.send();
  })
}

exports.add = (req, res) => {
  var localidad = new Localidad(req.body);
  localidad.save().then(result => {
    res.json(localidad);
  }).error(err => {
    console.log(err);
    res.status(500);
    res.send();
  })
}

exports.delete = (req, res) => {
  Localidad.get(req.params.id).then(localidad => {
    localidad.delete().then(result => {
      console.log(result);
      res.status(200);
      res.send();
    }).error(err => {
      console.log(err);
      res.status(500);
      res.send();
    })
  })
}