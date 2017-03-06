const thing = require('../db');

const r = thing.r;
const type = thing.type;


var Usuario = thing.createModel('Usuario', {
  _id:type.int(),
  nombre: type.string()
});

exports.Usuario = Usuario;

exports.list = (req, res) => {
  Usuario
  .run()
  .then(usuarios => {
    res.json(usuarios);
  })
  .error(err => {
    res.status(500);
    res.send();
  })
}
