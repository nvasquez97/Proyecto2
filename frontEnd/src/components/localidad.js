'use strict';
import React, { Component } from 'react';
import axios from 'axios'
const URL="https://futbolyabackend.herokuapp.com/";
export default class Localidad extends Component {
  constructor(props){

    super(props);
    this.state={
      localidades:[],
      tipo:''
    }
  }

  render() {
    return (

      <div className="container">
      <div className="container">
      <h2 className="primero">¿Qué deseas hacer?</h2>
      <div className="btn-group"  data-toggle="buttons-radio">
      <button className="btn btn-primary active" onClick={this.tipoB.bind(this)}>Buscar Equipo</button>
      <button className="btn active" onClick={this.tipoR.bind(this)}>Reclutar Equipo</button>

      </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="loc">Localidades</h2>
      <p className="escoge">Escoge la localidad en la que te gustaría jugar</p>
      <ul>
      <div className="recipeList">
      {this.state.localidades.map(localidad => {
        return (
        <li key={localidad._id}>
        <button className="btn btn-success" onClick={this.localidad.bind(this)}>{localidad.ubicacion}</button>
        </li>
        );
      })}
      </div>
      </ul>
      </div>
      );
  }

  tipoB()
  {
    this.obtenerLocalidades();
    this.setState({tipo : 'buscar'});
  }

  tipoR()
  {
    obtenerLocalidades();
    this.setState({tipo : 'reclutar'});
  }

  localidad()
  {
    console.log(event.target.value);
  }

  obtenerLocalidades() {
    axios.get(URL+ "localidades")
    .then(response => {
      this.setState({
        localidades: response.data
      })
    })
  }
}
