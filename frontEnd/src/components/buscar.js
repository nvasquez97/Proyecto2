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
        <h1></h1>
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
