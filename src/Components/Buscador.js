import React, { Component } from 'react';
class Buscador extends Component{

    busquedaRef = React.createRef();
    categoriaRef = React.createRef();
    state={
        placeh : "Find a character from rick and morty. Example: Summer"
      }

    handle = (e)=>{
        e.preventDefault();
        const valor=this.categoriaRef.current.value.toLowerCase()+"/?name="+this.busquedaRef.current.value
        {this.props.mensaje(valor)}
    }
    cambio = (e)=>{
        const cartegoria = this.categoriaRef.current.value;
        var placeh =""
        if(cartegoria=== "Character"){
            placeh="Find a character from rick and morty. Example: Summer";
        }
        else if(cartegoria=== "Location"){
            placeh="Find a Location from rick and morty. Example: Earth";
        }
        else if(cartegoria=== "Episode"){

            placeh="Find an Episode from rick and morty. Example: The Ricklantis Mixup";
        }
        this.setState({
            placeh
          }
          )
          const valor=this.categoriaRef.current.value.toLowerCase()+"/?name="+this.busquedaRef.current.value
          {this.props.mensaje(valor)}
    }

    render(){
        return(

            <form onSubmit={this.handle}>
                <div className="container">
                <div className="row justify-content-center">
                <div className="col">
                    <input ref={this.busquedaRef} onKeyUp={this.handle} className="form-control buscador" placeholder={this.state.placeh}></input>
                </div>
                <div className="col-3">    
                <select ref={this.categoriaRef} onChange={this.cambio} className="form-control" id="sel1">
                <option>Choose an option...</option>
                    <option>Character</option>
                    <option>Location</option>
                    <option>Episode</option>
                </select>
                </div>
                </div>
                </div>
            </form>

        );
    }
}

export default Buscador;