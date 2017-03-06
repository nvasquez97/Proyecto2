const thinky = require('../db');

const r = thinky.r;
const type = thinky.type;


var Reserva = thinky.createModel('Reserva', {
  id: type.string(),
  precio: type.string(),
  cupos: type.string(),
  id_usuario:type.string(),
  id_cancha:type.string()
});

exports.Reserva = Reserva;


exports.list = (req, res) => {
  Reserva
  .run()
  .then(reservas => {
    res.json(reservas);
  })
  .error(err => {
    res.status(500);
    res.send();
  })
}

exports.get = (req, res) => {
  Reserva
  .get(req.params.id)
  .then(reserva => {
    res.json(reserva);
  })
  .error(err => {
    res.status(404);
    res.send();
  })
}

exports.add = (req, res) => {
  var reserva = new Reserva(req.body);
  reserva.save().then(result => {
    res.json(reserva);
  }).error(err => {
    console.log(err);
    res.status(500);
    res.send();
  })
}

exports.delete = (req, res) => {
  Reserva.get(req.params.id).then(reserva => {
    reserva.delete().then(result => {
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