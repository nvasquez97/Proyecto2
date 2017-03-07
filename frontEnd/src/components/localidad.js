'use strict';
import React, { Component } from 'react';

export default class Localidad extends Component {
constructor(props){

    super(props);
    this.state={
      localidades:[],
      id:''
    }
  }

  render() {
    return (
        <!--No estaría mal indentar esto un tris.. -->
      <div className="container"><!--Este container dentro de este container si es necesario? :) -->
      <div className="container">
      <h2 className="primero">¿Qué deseas hacer?</h2>
      <div className="btn-group"  data-toggle="buttons-radio">
      <button className="btn btn-primary active">Buscar Equipo</button>
      <button className="btn active">Reclutar Equipo</button> 
<!--no entiendo bien que metodo llaman cuando se presiona el boton.. tal vez podrian ponerle un onClick() o hacer con react un componente hijo que les ayude con el metodo -->
      </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="loc">Localidades</h2>
      <p className="escoge">Escoge la localidad en la que te gustaría jugar</p>
      <ul>
      <li>San Cristobal</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      <li>Usaquen</li>
      <li>Bosa</li>
      <li>Suba</li>
      <li>Kennedy</li>
      </ul>
      </div>
    );
  }
/**Este obtener localidades lo usan para algo? si quieren no poner todos los li pueden usar un .map 
Aqui un ejemplo

<div className="recipeList">
                    {this.state.recipes.map(recipe => {
                        return (
                          <div key={recipe.title}>
                            <Recipe recipe={recipe} ingredients={recipe.Ingredients}
                             username={this.props.username} password={this.props.password}
                             title={recipe.title} getRecipes={this.getRecipesByUsername.bind(this)} />
                          </div>
                        );
                    })}
</div>
         
 Esto va en el render.. cogen la lista de localidades y le dan .map. Luego por cada elemento en el map usan return para 
 devolver un html

*/    
  obtenerLocalidades() {
    axios.get(ROOT_URL+ "/localidad")
    .then(response => {
      this.setState({
        localidades: response.data
      })
    })
  }
}
