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

    </>
  )
}

export default MenuSup
