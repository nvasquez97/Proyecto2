import React, { Component } from 'react';
import axios from 'axios'
const URL="localhost:27017";
export default class Buscar extends Component {


  constructor(props)
  {
    super(props);
    this.state={
      reservas:[],
      id:''
    }
  }
  render() {
    return (
      <div>
        <h1 className="tit">
          Busca un partido en tu cancha favorita:
        </h1>
        <div className="row">
          <button className="btn btn-default">Fútbol 5</button>
          <button className="btn btn-default">Fútbol 7</button>
          <button className="btn btn-default">Fútbol 8</button>
          <button className="btn btn-default">Fútbol 11</button>
        </div>
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
