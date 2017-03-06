const Estudiante = require('../models/cancha');
const Estudiante = require('../models/reserva');
const Estudiante = require('../models/usuario');
const Estudiante = require('../models/localidad');

module.exports = function(app) {

  app.get('/canchas', Cancha.list);
  app.get('/canchas/:id', Cancha.get);
  app.post('/canchas', Cancha.add);
  app.delete('/canchas/:id', Cancha.delete);

  app.get('/usuarios', Usuario.list);
  app.get('/usuarios/:id', Usuario.get);
  app.post('/usuarios', Usuario.add);
  app.delete('/usuarios/:id', Usuario.delete);

   app.get('/reservas', Reserva.list);
  app.get('/reservas/:id', Reserva.get);
  app.post('/reservas', Reserva.add);
  app.delete('/reservas/:id', Reserva.delete);

 app.get('/localidades', Localidad.list);
  app.get('/localidades/:id', Localidad.get);
  app.post('/localidades', Localidad.add);
  app.delete('/localidades/:id', Localidad.delete);

}
