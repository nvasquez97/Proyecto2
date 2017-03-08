'use strict';
const Cancha = require('./models/cancha');
const Reserva = require('./models/reserva');
const Usuario = require('./models/usuario');
const Localidad = require('./models/localidad');

/*podrian colocar los path en cada modulo para mayor comodidad (todas las rutas de canchas en el modelo canchas), aunque así funciona tambien**/

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.send('This is the DB for FutbolYa')
  })
  //Cancha
  app.get('/canchas', Cancha.list);
  app.get('/canchas/:id', Cancha.get);
  app.post('/canchas', Cancha.add);
  app.delete('/canchas/:id', Cancha.delete);
  app.get('/canchas/:idlocalidad/:tipo', Cancha.getCanchas);
 //Usuarios
  app.get('/usuarios', Usuario.list);
   app.get('/usuarios/:id', Usuario.get);
  app.post('/usuarios', Usuario.add);
  app.delete('/usuarios/:id', Usuario.delete);
 //Reservas
   app.get('/reservas', Reserva.list);
  app.get('/reservas/:id', Reserva.get);
  app.get('/reservas/:id', Reserva.get);
  app.post('/reservas', Reserva.add);
  app.delete('/reservas/:id', Reserva.delete);
  app.get('/reservas/:idlocalidad/:tipo', Reserva.getReservas)
 //Localidades
 app.get('/localidades', Localidad.list);
  app.get('/localidades/:id', Localidad.get);
  app.post('/localidades', Localidad.add);
  app.delete('/localidades/:id', Localidad.delete);

}
