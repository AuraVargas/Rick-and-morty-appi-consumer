
import React, { Component } from 'react';
import ram from './Rick_and_Morty_logo.png';
import './App.css';
import Buscador from './Components/Buscador'
import Resultados from './Components/Resultados'
import Paginacion from './Components/Paginacion'




class App extends Component{
  
  state={
    mensaje : "character/",
    dato: [],
    pagina:1
  }
  anterior=()=>{
    let pagina=this.state.pagina;
    if(pagina===1) return null;
    pagina-=1
    this.setState({
      pagina
    },()=>{
      this.ConsultaApi();
    }
    )
  }
  siguiente=()=>{
    let pagina=this.state.pagina;
    pagina+=1
    this.setState({
      pagina
    },()=>{
      this.ConsultaApi();
    }
    )
  }
  siguiente2=()=>{
    let pagina=this.state.pagina;
    pagina+=2
    this.setState({
      pagina
    },()=>{
      this.ConsultaApi();
    }
    )
  }
  
  ConsultaApi= (mensaje) =>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  const url = `https://rickandmortyapi.com/api/${this.state.mensaje}&page=${this.state.pagina}`;
    fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {this.setState({dato: data.results})
            console.log(data)
                })
            .catch(error => console.log('error', error));
            
          }
  

  Busqueda = (mensaje) =>{
    this.setState({
      mensaje,
      pagina:1
    },()=>{
      this.ConsultaApi();
    }
    )
  }
  render(){
    
  return (
    <div className="App">
      {/* {this.ConsultaApi()}  */}
      <header >
        
        <br/>
        <img src={ram} className="App-logo" alt="logo" />
        <hr/>
        <Paginacion
        pagina={this.state.pagina}
        anterior={this.anterior}
        siguiente={this.siguiente}
        siguiente2={this.siguiente2}
        />
        <Buscador
        mensaje={this.Busqueda}
        />
        
        <br/>
        
        <div class="row caja">
        <Resultados
        dato = {this.state.dato}
        anterior={this.anterior}
        siguiente={this.siguiente}
        /></div>
        <Paginacion
        pagina={this.state.pagina}
        anterior={this.anterior}
        siguiente={this.siguiente}
        siguiente2={this.siguiente2}
        />
      </header>
    </div>
  )
  }
}

export default App;
