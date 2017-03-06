import React, { Component } from 'react';


export default class Reserva extends Component {
  render(){
      return(
        <div className='reserva'>
          <div className='reservaI'>
            <h4>
              Cancha: Fut 5
            </h4>
            <p className="blanco">
              Precio: $2000
              <br></br>
              Cupos: 2
            </p>
          </div>
          <div className='reservaD'>

          </div>
        </div>
      )
    }
}
