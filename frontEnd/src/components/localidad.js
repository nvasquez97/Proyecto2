import React, { Component } from 'react';

export default class Localidad extends Component {

  render() {
    return (
    	<div className="container">
    	<div className="container">
    	<h2 className="primero">¿Qué deseas hacer?</h2>
    	<div className="btn-group"  data-toggle="buttons-radio">
    	<button className="btn">Buscar Equipo</button>
    	<button className="btn">Reclutar Equipo</button>
    	</div>
    	</div>
      <h2 className="container">Localidades</h2>
      <p className="escoge">Escoge la localidad en la que te gustaría jugar</p>
      </div>
    );
  }
}
