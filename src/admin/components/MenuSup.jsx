import React from 'react'
import Horizontal from '../../assets/img/Horizontal.png'
import favicon2 from '../../assets/img/favicon2.png'
import gear from '../../assets/img/icons/gear.svg'
import box_arrow from '../../assets/img/icons/box-arrow-right.svg'
import bell2 from '../../assets/img/icons/bell2.svg'
import person2 from '../../assets/img/icons/person-circle2.svg'

function MenuSup() {
  return (
    <>
       {/* Inicio Nav */}
  <nav className="navbar navbar-expand-lg p-0 navbar-dark bg-color-blue sticky-top w-100" id="menu">
    <div className="container-fluid ">
      <a className="navbar-brand" href="/index2.html">
        <img src={Horizontal}alt="Logo" className="img-logo" />
        <img src={favicon2} alt="Logo" className="img-logo-mini d-none me-auto" /></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

<a   className="btn btn-green" data-bs-toggle="modal" href="" data-bs-target="#exampleModalIN" >
  + Crear evento</a>

      <div className="d-inline d-flex navbar-brand" id="navbarSupportedContent">
        <div className="navbar-nav ms-3">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src={bell2} alt="icon-user" /></a>
            <ul className="dropdown-menu bg-color-blue" style={{left: "-120px"}} aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal" ><img src={gear} alt="icon-ajustes"
                    className="me-3"/>
                  Ajustes</a>
              </li>  
            </ul>
          </li>
        </div>
        <div className="navbar-nav ms-3 h-100">
          <li className="nav-item dropdown">
            <a className="nav-link h-100" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src={person2}alt="icon-user" /></a>
            <ul className="dropdown-menu bg-color-blue" style={{left: "-120px"}}  aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal" ><img src={gear} alt="icon-ajustes"
                    className="me-3"/>
                  Ajustes</a>
              </li>
              <li>
              </li>   
              <li>
                <a className="dropdown-item text-white" href="/index.html">
                    <img src={box_arrow}
                    alt="icon-cerrarsesion" className="me-3" />
                  Cerrar Sesion</a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
  {/* Modal CREAR EVENTO */}
<div className="modal fade" id="exampleModalIN" tabIndex="-1" aria-labelledby="exampleModalINLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalINLabel">CREAR EVENTO</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form className="row g-2 needs-validation" action="/index.html" noValidate>
          <div className="text-center w-100">
            <h2 className="h2 pt-4 pb-5 f">CREAR EVENTO</h2>
          </div>
          {/* Nombre del evento */}
          <div className="col-12 mt-0" style={{padding: "0 50px 0 50px"}}>
            <label htmlFor="validationCustom01" className="form-label">NOMBRE DEL EVENTO</label>
            <input type="text" className="form-control" id="validationCustom01" required/>
          </div>
          {/* Fecha y hora de inicio */}
          <div className="col-12 mt-0" style={{padding: "0 50px 0 50px"}}>
            <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA DE INICIO</label>
            <input type="datetime-local" className="form-control" id="validationCustom02" required/>
          </div>
          {/* Fecha y hora final */}
          <div className="col-12 mt-0" style={{padding: "0 50px 0 50px"}}>
            <label htmlFor="validationCustom03" className="form-label">FECHA Y HORA FINAL</label>
            <input type="datetime-local" className="form-control" id="validationCustom03" required/>
          </div>
          {/* Seleccionar instructor */}
          <div className="col-12 mt-0" style={{padding: "0 50px 0 50px"}}>
            <label htmlFor="exampleFormControlSelect1" className="form-label">SELECCIONAR INSTRUCTOR</label>
            <select className="form-control" id="exampleFormControlSelect1" defaultValue="1">
              <option value="1" disabled>Seleccionar...</option>
              <option value="2">1</option>
              <option value="3">2</option>
              <option value="4">3</option>
              <option value="5">4</option>
              <option value="6">5</option>
            </select>
          </div>
          {/* Botón CREAR EVENTO */}
          <div className="col-12 d-flex justify-content-center mb-2 pb-4 pt-3">
            <button className="btn btn-green" type="submit">CREAR EVENTO</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/* FinModal MODAL CREAR EVENTO */}


    </>
  )
}

export default MenuSup
