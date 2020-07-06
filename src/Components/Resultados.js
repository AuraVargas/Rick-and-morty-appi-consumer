import React, { Component } from 'react';
import Objeto from './Objeto';


class Resultados extends Component{
    mostrar = ()=>{
        const dato=this.props.dato;
        // console.log("dato")
        if (typeof(dato) === "undefined")return null;
        return(
            <React.Fragment>
                {dato.map(da=>(
                    <Objeto
                    key={da.id}
                    dato={da}
                    />
                ))}
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
            {this.mostrar()}
            </React.Fragment>
        );
    }
}

export default Resultados;