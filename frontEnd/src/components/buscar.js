'use strict';
  import React, { Component } from 'react';
  import axios from 'axios'
  import Reserva from './reserva'
  const URL="https://futbolyabackend.herokuapp.com/";
  export default class Buscar extends Component {


    constructor(props)
    {
      super(props);
      this.state={
        reservas:[],
        id:'',
        tipo:'Sin seleccionar',
        localidades:'',

      }
    }
    render() {
      return (
        <div className="container">
          <h1 className="verde">
            Busca un partido en tu cancha favorita:
          </h1>
          <div className='row'>
        <!--Pueden usar un componente para los tipos de cancha y llamar al especificado cuando el usuario haga click-->
            <button className="btn btn-default">Fútbol 5</button>
            <button className="btn btn-default">Fútbol 7</button>
            <button className="btn btn-default">Fútbol 8</button>
            <button className="btn btn-default">Fútbol 11</button>
          </div>
          <h3 className="verde">Mira las reservas para <strong>{this.state.tipo}</strong></h3>
            {this.state.reservas.map(reserva => {
              return <Reserva reserva={reserva} />
            })}
            <Reserva/>
        </div>
      );
    }
 /*seria bueno si eventualmente filtran las reservas por usuario.. creo que va para la siguiente entrega :)*/
    obtenerReservas()
    {
      axios.get(URL+"/")
    }
/*JEJE obtener estudiantes :) */
    obtenerEstudiantes() {
      axios.get(URL+ "/estudiantes")
      .then(response => {
        this.setState({
          estudiantes: response.data
        })
      })
    }
  }
