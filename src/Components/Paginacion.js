
import React from 'react';


const Paginacion = (props) =>{
        return(
            <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"onClick={props.anterior}>
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
      
    </li>
    {props.pagina==1?
<li class="page-item active"><a class="page-link" href="#">{props.pagina}</a></li>
:
  <li class="page-item"><a class="page-link" onClick={props.anterior} href="#">{props.pagina-1}</a></li>
    }
    {props.pagina==1?
<li class="page-item"><a class="page-link" onClick={props.siguiente} href="#">{props.pagina+1}</a></li>
:
  <li class="page-item active"><a class="page-link" href="#">{props.pagina}</a></li>
    }
    {props.pagina==1?
<li class="page-item"><a class="page-link" onClick={props.siguiente2} href="#">{props.pagina+2}</a></li>
:
  <li class="page-item"><a class="page-link" onClick={props.siguiente} href="#">{props.pagina+1}</a></li>
    }
    <li className="page-item" onClick={props.siguiente}>
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
        );
}

export default Paginacion;