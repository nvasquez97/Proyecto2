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
        tipo:'',
        localidades:'',

      }
    }
    futbol5()
    {
      this.setState(
      {
       tipo: 'Fútbol 5'
     }
     )
    }
    render() {
      return (
        <div className="container oculto">
        <h1 className="verde">
        Busca un partido en tu cancha favorita:
        </h1>
        <div className='row'>
        <button className="btn btn-default" >Fútbol 5</button>
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



      obtenerReservas() {
        axios.get(URL+ "/reservas")
        .then(response => {
          this.setState({
            reservas: response.data
          })
        })
      }
    }
