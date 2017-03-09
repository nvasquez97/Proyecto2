  'use strict';
  import React, { Component } from 'react';
  import axios from 'axios'
  import Reserva from './reserva'
  import Cancha from './cancha'
  const URL="https://futbolyabackend.herokuapp.com/";
  export default class Buscar extends Component {


    constructor(props)
    {
      super(props);
      this.state={
        reservas:[],
        canchas:[],
        id:'',
        tipo:'',
        localidades:'',
        descripcion: '',
        estado:''

      }
    }

    render() {
      return (
        <div className="container oculto">
        <h1 className="verde">
        {this.props.reserva} en tu cancha favorita:
        </h1>
        <div className='row'>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(5)}>Fútbol 5</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(7)}>Fútbol 7</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(8)}>Fútbol 8</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(11)}>Fútbol 11</button>
        </div>
        <h3 className="verde">{this.state.descripcion}<strong>{this.state.tipo}</strong></h3>
        {this.state.reservas.map(reserva => {
          return <Reserva key={reserva.key} reserva={reserva} />
        })}
        {this.state.canchas.map(cancha => {
          return <Cancha key={cancha.key} cancha={cancha} />
        })}
        </div>
        );
      }



      obtenerReservas(num) {
        var idloc=this.props.localidad;
        if(this.props.reserva==='Busca')
        {
          axios.get(URL+ "reservas"+'/'+idloc+'/'+num)
          .then(response => {
            this.setState({
              reservas: response.data,
              tipo: 'Fútbol '+num,
              descripcion:'Mira reservas para '
            })
          })
        }
        else
        {
          axios.get(URL+ "canchas")
          .then(response => {
            this.setState({
              canchas: response.data,
              tipo: 'Fútbol '+num,
              descripcion:'Intenta reclutar en: '
            })
          })
        }
      }
    }
