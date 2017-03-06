import React, { Component } from 'react';

export default class InfoReservas extends Component {

	render() {
		return (
			<div className="container" >
			<h1 id="info">Consulta tu Reserva</h1>
			<div className="table-responsive">
			<table className="table table-hover">
			<thead>
			<tr>
			<th>Id Reserva</th>
			<th>Localidad</th>
			<th>Cancha</th>
			<th>Precio</th>
			<th>Hora</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>45</td>
			<td>Suba</td>
			<td>Gataca</td>
			<td>25000</td>
			<td>11:30AM</td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			);
		}
	}