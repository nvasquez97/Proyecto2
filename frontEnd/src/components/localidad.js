'use strict';
import React, { Component } from 'react';

export default class Localidad extends Component {
constructor(props){

    super(props);
    this.state={
      localidades:[],
      id:''
    }
  }

  render() {
    return (
      <div className="container">
      <div className="container">
      <h2 className="primero">¿Qué deseas hacer?</h2>
      <div className="btn-group"  data-toggle="buttons-radio">
      <button className="btn btn-primary active">Buscar Equipo</button>
      <button className="btn active">Reclutar Equipo</button>
      </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="loc">Localidades</h2>
      <p className="escoge">Escoge la localidad en la que te gustaría jugar</p>
      <ul>
      <li>San Cristobal</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      </ul>
      </div>
    );
  }

  obtenerLocalidades() {
    axios.get(ROOT_URL+ "/localidad")
    .then(response => {
      this.setState({
        localidades: response.data
      })
    })
  }
}
