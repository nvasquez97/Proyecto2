'use strict';
import React, {Component } from 'react';
import axios from 'axios'
const URL="https://futbolyabackend.herokuapp.com/";
export default class Cancha extends Component{


	constructor(props){
		super(props);
		this.state={

		direccion:'',
		nombreSitio:'',
		tipo:'',
		contacto:''
		}


	}

	render(){

		return (
			<div className='container reserva'>
            <div className='reservaI blanco'>
              <h4>
                NombreSitio: {this.props.cancha.nombreSitio}
              </h4>
              <p>
                Dirección: {this.props.cancha.direccion}
                <br></br>
                Tipo: {this.props.cancha.tipo}
                <br></br>
                Contacto: {this.props.cancha.contacto}
              </p>
            </div>
            <div className='reservaD'>
              <div className="fotoSitio">
                <img src="./style/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha"></img>                              </div>
              <div>
                <button className="btn btn-default" >Recluta en esta cancha</button>
              </div>
            </div>
          </div>

			)
	}
}