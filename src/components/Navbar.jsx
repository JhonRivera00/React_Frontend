import React from 'react';
import Horizontal from '../assets/img/Horizontal.png'
import box_arrow_right from '../assets/img/icons/box-arrow-right.svg';
import person_circle from '../assets/img/icons/person-circle.svg';
import bell from '../assets/img/icons/bell.svg'
import gear from '../assets/img/icons/gear.svg'
import Favicon2 from '../assets/img/favicon2.png'
import { Link, Outlet } from 'react-router-dom';
import Footer from './Fotter'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-color-blue p-3" id="menu">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img src={Favicon2} alt="Logo" className="img-logo-mini d-none me-auto" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse opciones-navbar" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 ">
                <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link " to="/conocenos">CONOCENOS</Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link" to="/charla" data-bs-toggle="modal" data-bs-target="#exampleModal1" aria-current="page">CHARLA</Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link" to="/cronograma">CRONOGRAMA</Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link" to="/contactanos">CONTACTANOS</Link>
              </li>
            </ul>
            <div className="navbar-nav ms-3 user">
              <li className="nav-item dropdown ">
                <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"><img src={person_circle} alt="icon-user" /></a>
                <ul className="dropdown-menu bg-green border-green" style={{ left: "-120px", backgroundColor: "#00324d" }} aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item text-white" data-bs-toggle="modal" href="" data-bs-target="#exampleModal">
                      <img src={gear} alt="icon-ajustes" className="me-3" />
                      Ajustes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      <div className="d-inline-block position-relative">
                        <img src={bell} alt="icon-cerrarsesion" className="" />
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-green border  rounded-circle"></span>
                      </div>
                      &nbsp;&nbsp;Notificaciones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="/index2.html">
                      <img src={box_arrow_right} alt="icon-cerrarsesion" className="me-3" />
                      Cerrar Sesion
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
      

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Inicio Sesion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action='/charla'> 
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>



{/* Modal Registrarse */}
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <form className="needs-validation was-validated" action="" noValidate autoComplete="off">
      <div className="modal-header">
        <h4 className="modal-title">Datos Generales</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="container">

          <div className="col-md-7 col-lg-8 text-secondary mx-auto">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label ">Nombre:</label>
                  <input type="text" className="form-control bg-white border-green" id="firstName" placeholder="" required/>
                </div>
    
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Apellido:</label>
                  <input type="text" className="form-control  bg-white border-green" id="lastName" placeholder="" required/>
                </div>
    
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Direccion correo electronico</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text border-green">@</span>
                    <input type="text" className="form-control  bg-white border-green" id="username" required/>
                  </div>
                </div>
    
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Numero Telefono<span
                      className="text-muted"></span></label>
                  <input type="number" className="form-control  bg-white border-green" id="email" required/>
                </div>
    
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Direccion:</label>
                  <input type="text" className="form-control  bg-white border-green" id="address" required/>
                </div>
                </div>    
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" className="btn btn-green border-green">Guardar cambios</button>
          </div>
        </form>
        </div>
    </div>
  </div>
{/*Fin Modal Registrarse */}

    <Outlet/>
    <Footer/>
    
    </>
  );
}

export default Navbar;