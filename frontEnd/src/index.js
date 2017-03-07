'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import FutbolYa from './components/futbolYa';
import Localidad from './components/localidad';
import Buscar from './components/buscar';
import InfoReservas from './components/infoReservas';
/*Aquí tal vez podrian tener un padre para todos estos componentes, para dar mas orden y entender en la pagina como se van a renderizar las cosas*/
/*Asi como lo tienen no es tan claro que se renderiza en donde...*/
ReactDOM.render(<FutbolYa /> , document.querySelector('.futbolYa'));
ReactDOM.render(<Localidad/> , document.querySelector('.localidad'));
ReactDOM.render(<Buscar/> , document.querySelector('.buscar'));
ReactDOM.render(<InfoReservas/> , document.querySelector('.infoReservas'));
