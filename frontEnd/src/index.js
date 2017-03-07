  'use strict';
  import React from 'react';
  import ReactDOM from 'react-dom';

  import FutbolYa from './components/futbolYa';
  import Localidad from './components/localidad';
  import Buscar from './components/buscar';
  import InfoReservas from './components/infoReservas';

  ReactDOM.render(<FutbolYa /> , document.querySelector('.futbolYa'));
  ReactDOM.render(<Localidad/> , document.querySelector('.localidad'));
  ReactDOM.render(<Buscar/> , document.querySelector('.buscar'));
  ReactDOM.render(<InfoReservas/> , document.querySelector('.infoReservas'));
