import React from 'react'
import Horizontal from '../../assets/img/Horizontal.png'
import favicon2 from '../../assets/img/favicon2.png'
import gear from '../../assets/img/icons/gear.svg'
import box_arrow from '../../assets/img/icons/box-arrow-right.svg'
import bell2 from '../../assets/img/icons/bell2.svg'
import person2 from '../../assets/img/icons/person-circle2.svg'
import { Link, Outlet } from 'react-router-dom';

function MenuSup() {
  return (
    <>
      {/* Inicio Nav */}
      <nav className="navbar navbar-expand-lg p-0 navbar-dark bg-color-blue sticky-top w-100" id="menu">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/index2.html">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img src={favicon2} alt="Logo" className="img-logo-mini d-none me-auto" /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="btn btn-green" data-bs-toggle="modal" href="" data-bs-target="#exampleModalIN" >
            + Crear evento</a>

      <div className="d-inline d-flex navbar-brand" id="navbarSupportedContent">
        <div className="navbar-nav ms-3">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src={bell2} alt="icon-user" /></a>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownNotifications">
    <h6 class="dropdown-header">Nuevas notificaciones</h6>
    <a class="dropdown-item" href="#">
      <div class="media">
        <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..."/>
        <div class="media-body">
          <h6 class="mt-0 mb-1">Notificación 1</h6>
          <p>Descripción de la notificación 1.</p>
          <small class="text-muted">Hace 5 minutos</small>
        </div>
      </div>
    </a>
    <a class="dropdown-item" href="#">
      <div class="media">
        <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..."/>
        <div class="media-body">
          <h6 class="mt-0 mb-1">Notificación 2</h6>
          <p>Descripción de la notificación 2.</p>
          <small class="text-muted">Hace 10 minutos</small>
        </div>
      </div>
    </a>
    <a class="dropdown-item" href="#">
      <div class="media">
        <img src="https://via.placeholder.com/50x50" class="mr-3 rounded-circle" alt="..."/>
        <div class="media-body">
          <h6 class="mt-0 mb-1">Notificación 3</h6>
          <p>Descripción de la notificación 3.</p>
          <small class="text-muted">Hace 15 minutos</small>
        </div>
      </div>
    </a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item text-center" href="#">Ver todas las notificaciones</a>
  </div>

          </li>
        </div>
        <div className="navbar-nav ms-3 h-100">
          <li className="nav-item dropdown">
            <a className="nav-link h-100" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src={person2}alt="icon-user" /></a>
            <ul className="dropdown-menu bg-color-blue" style={{left: "-120px"}}  aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#modalInicioDatos" ><img src={gear} alt="icon-ajustes"
                    className="me-3"/>
                  Ajustes</a>
              </li>
              <li>
              </li>   
              <li>
                <Link className="dropdown-item text-white" to="/">
                    <img src={box_arrow}
                    alt="icon-cerrarsesion" className="me-3" />
                  Cerrar Sesion</Link>
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


      {/* <!-- Modal datos ajustes --> */}
      <div
        class="modal fade"
        id="modalInicioDatos"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content bg-color-blue  text-white ">
            <form
              class="needs-validation"
              action=""
              autocomplete="off"
            >
              <div class="modal-header">
                <h4 class="modal-title w-100 text-center ">Datos Generales</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-white">
                <div class="container">
                  <div class="col-md-7 col-lg-8 mx-auto">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="firstName" class="form-label ">
                          Nombre
                        </label>
                        <input
                          type="text"
                          class="form-control bg-white border-green"
                          id="firstName"
                          placeholder="Ingrese Nombre"
                          required
                        />
                      </div>

                      <div class="col-sm-6">
                        <label for="lastName" class="form-label">
                          Apellido
                        </label>
                        <input
                          type="text"
                          class="form-control  bg-white border-green"
                          id="lastName"
                          placeholder="Ingrese Apellido"
                          required
                        />
                      </div>

                      <div class="col-12">
                        <label for="username" class="form-label">
                          correo electronico
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text border-green">@</span>
                          <input
                            type="text"
                            class="form-control  bg-white border-green"
                            id="username"
                            placeholder="Ingrese el correo Electronico"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="email" class="form-label">
                          Numero Telefono<span class="text-muted"></span>
                        </label>
                        <input
                          type="number"
                          class="form-control  bg-white border-green"
                          id="email"
                          placeholder="Ingrese Numero Telefono"
                          required
                        />
                      </div>

                      <div class="col-12">
                        <label for="address" class="form-label">
                          Direccion:
                        </label>
                        <input
                          type="text"
                          class="form-control  bg-white border-green"
                          id="address"
                          placeholder="Ingrese Dirreccion"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>

                <button type="submit" class="btn btn-green border-green">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Fin Modal Datos Ajustes --> */}



    </>
  )
}

export default MenuSup
