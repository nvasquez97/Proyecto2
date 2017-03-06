const thing = require('../db');

const r = thing.r;
const type = thing.type;


var Cancha = thing.createModel('Cancha', {
  direccion: type.string(),
  foto: type.string(),
  nombreSitio: type.string(),
  contacto:type.int(),
  tipo:type.int()
});

exports.Cancha = Cancha;

exports.list = (req, res) => {
  Cancha
  .run()
  .then(canchas => {
    res.json(canchas);
  })
  .error(err => {
    res.status(500);
    res.send();
  })
}
