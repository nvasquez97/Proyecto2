import React from 'react';
import ReactDOM from 'react-dom';

import FutbolYa from './components/futbolYa';
import Localidad from './components/localidad';
import Buscar from './components/buscar';
import Botones from './components/botones';

ReactDOM.render(<FutbolYa /> , document.querySelector('.futbolYa'));
ReactDOM.render(<Localidad/> , document.querySelector('.localidad'));
ReactDOM.render(<Buscar/> , document.querySelector('.buscar'));
ReactDOM.render(<Botones/> , document.querySelector('.botones'));
