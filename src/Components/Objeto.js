import React from 'react';
import logo from "../logo.webp";

const Datos = (props) =>{
    let descripcion=""
    if(typeof(props.dato.image) === "undefined"){
        props.dato.image =logo;
        
        if(typeof(props.dato.type) === "undefined"){
            props.dato.image =logo;
            descripcion="episode"
        }
        else{
            descripcion="location"
        }
        
    }
    else{
        descripcion="character"
    }
    function changeBackground(e) {
        e.target.style.color = '#F1948A ';
        e.target.style.fontSize ="25px";
      }
      function changeBackground2(e) {
        e.target.style.color = 'black';
        e.target.style.fontSize ="20px";
      }
    
    let nombre = `#exampleModal${props.dato.id}`
    let nombre2 = `exampleModal${props.dato.id}`
    return(
        
        <div className="row justify-content-md-center">
        <div className="col">
        <div className="card"onMouseOver={changeBackground} onMouseOut={changeBackground2}>
            <img className="card-img-top coo" type="button" onClick={props.key}  data-toggle="modal" data-target={nombre}src={props.dato.image}  src={props.dato.image} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title prueba"type="button"  data-toggle="modal" data-target={nombre}>{props.dato.name}</h5>
            
        </div>
        </div>
        </div>
        <div class="modal fade" id={nombre2} tabindex="-1" rdte="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
        <div class="modal-dialog" rdte="document">
        <div class="modal-content">
      <div class="modal-header">
          <h5 className="title">{props.dato.name}</h5>
      </div>
      <div class="modal-body">
      <div className="row justify-content-md-center">
        <div className="cdt">
            
            <img className="card-img-top imagen" type="button" data-toggle="modal" data-target="#exampleModal"src={props.dato.image} alt="Card image cap"/>
            </div>
            <div className="cdt lista">
            <br></br>
            {descripcion=="character"?
            <div>
            <dt>Status </dt>
            <dd>{props.dato.status}</dd>
            <dt>Species </dt>
            <dd>{props.dato.species}</dd>
            <dt>Gender </dt>
            <dd>{props.dato.gender}</dd>
            </div>
            :descripcion=="location"?
            <div className="row">
                <div className="col">
            <dt>Dimension </dt>
            <dd>{props.dato.dimension}</dd>
            </div>
            <div className="col">
            <dt>Type </dt>
            <p>{props.dato.type}</p>
            </div>
            </div>
            :descripcion=="episode"?
            <div className="row">
                <div className="col">
            <dt>Air date </dt>
            <dd>{props.dato.air_date}</dd>
            </div>
            <div className="col">
            <dt>Episode </dt>
            <dd>{props.dato.episode}</dd>
            </div>
            </div>
            :
            <p>Error</p>
            }
            </div>
            </div>
            </div>
</div>
  </div>
</div>
        </div>

    )

}

export default Datos;