  'use strict';
  import React, { Component } from 'react';
  import FutbolYa from './futbolYa';
  import Localidades from './localidades';
  import Buscar from './buscar';
  import InfoReservas from './infoReservas';
  import Cancha from './cancha';

  export default class App extends Component {

  	constructor(props)
  	{
  		super(props);
      this.state=
      {
        reserva:'',
        localidadId: -1
      }
  	}

  	render()
  	{
  		return(
  			<div>
  			<div className="futbolYa">
  				<FutbolYa/>
  			</div>

  			<div className="localidad">
  				<Localidades obtenerReservas={this.obtenerReservas.bind(this)}/>
  			</div>

  			<div className="buscar"><Buscar reserva={this.state.reserva} localidad={this.state.localidadId}/></div>
  			</div>
  			);
  	}

    obtenerReservas(tipo, num)
    {
      this.setState(
      {
        reserva:tipo,
        localidadId:num
      });
    }
  }
