  import React, { Component } from 'react';
  import axios from 'axios'
  import Reserva from './reserva'
  const URL="localhost:5000";
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
            <button className="btn btn-default">Fútbol 5</button>
            <button className="btn btn-default">Fútbol 7</button>
            <button className="btn btn-default">Fútbol 8</button>
            <button className="btn btn-default">Fútbol 11</button>
          </div>
          <h3 className="verde">Mira las reservas para {this.state.tipo}</h3>
            {this.state.reservas.map(reserva => {
              return <Reserva reserva={reserva} />
            })}
            <Reserva/>
        </div>
      );
    }

    obtenerReservas()
    {
      axios.get(URL+"/")
    }

    obtenerEstudiantes() {
      axios.get(ROOT_URL+ "/estudiantes")
      .then(response => {
        this.setState({
          estudiantes: response.data
        })
      })
    }
  }
