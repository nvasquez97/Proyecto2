  'use strict';
  import React, { Component } from 'react';
  import FutbolYa from './futbolYa';
  import Localidades from './localidades';
  import Buscar from './buscar';
  import InfoReservas from './infoReservas';

  export default class App extends Component {

  	constructor(props)
  	{
  		super(props);
  	}

  	render()
  	{
  		return(
  			<div>
  			<div className="futbolYa">
  				<FutbolYa/>
  			</div>

  			<div className="localidad">
  				<Localidades/>
  			</div>

  			<div className="buscar"><Buscar/></div>
  			</div>
  			);


  	}
  }
