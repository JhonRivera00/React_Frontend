import React from "react";
import Horizontal from "../assets/img/Horizontal.png";
import box_arrow_right from "../assets/img/icons/box-arrow-right.svg";
import person_circle from "../assets/img/icons/person-circle.svg";
// import bell from "../assets/img/icons/bell.svg";
import bell2 from "../assets/img/icons/bell2.svg";
import gear from "../assets/img/icons/gear.svg";
import Favicon2 from "../assets/img/favicon2.png";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Fotter";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-color-blue p-3"
        id="menu"
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img src={Horizontal} alt="Logo" className="img-logo" />
            <img
              src={Favicon2}
              alt="Logo"
              className="img-logo-mini d-none me-auto"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse opciones-navbar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 ">
                <Link className="nav-link active" aria-current="page" to="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link " to="/conocenos">
                  CONOCENOS
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link
                  className="nav-link"
                  to="/charla"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  aria-current="page"
                >
                  CHARLA
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link" to="/cronograma">
                  CRONOGRAMA
                </Link>
              </li>
              <li className="nav-item fs-6">
                <Link className="nav-link" to="/contactanos">
                  CONTACTANOS
                </Link>
              </li>
            </ul>
            <div className="navbar-nav ms-3 user">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <div className="d-inline-block position-relative">
                    <img src={bell2} alt="icon-cerrarsesion" className="" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-green border  rounded-circle"></span>
                  </div>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownNotifications"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAseptarRecha"
                >
                  <h6 class="dropdown-header ">Nuevas notificaciones</h6>
                  <a class="dropdown-item" href="#">
                    <div class="media">
                      <img
                        src="https://via.placeholder.com/50x50"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />

                      <div class="media-body">
                        <h6 class="mt-0 mb-1">Notificación 1</h6>
                        <p>Descripción de la notificación 1.</p>
                        <small class="text-muted">Hace 5 minutos</small>
                      </div>
                    </div>
                  </a>

                  <a class="dropdown-item" href="#">
                    <div class="media">
                      <img
                        src="https://via.placeholder.com/50x50"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Notificación 2</h6>
                        <p>Descripción de la notificación 2.</p>
                        <small className="text-muted">Hace 10 minutos</small>
                      </div>
                    </div>
                  </a>

                  <a class="dropdown-item" href="#">
                    <div class="media">
                      <img
                        src="https://via.placeholder.com/50x50"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h6 className="mt-0 mb-1">Notificación 3</h6>
                        <p>Descripción de la notificación 3.</p>
                        <small className="text-muted">Hace 15 minutos</small>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-center" href="#">
                    Ver todas las notificaciones
                  </a>
                </div>
              </li>
            </div>
            <div className="navbar-nav ms-3 user">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={person_circle} alt="icon-user" />
                </a>
                <ul
                  className="dropdown-menu bg-green border-green"
                  style={{ left: "-120px", backgroundColor: "#00324d" }}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item text-white"
                      data-bs-toggle="modal"
                      href=""
                      data-bs-target="#modalInicioDatos"
                    >
                      <img src={gear} alt="icon-ajustes" className="me-3" />
                      Ajustes
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/admin">
                      <img
                        src={box_arrow_right}
                        alt="icon-cerrarsesion"
                        className="me-3"
                      />
                      Cerrar Sesion
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>

      {/*} Modal Inicio Sesion */}
      <div
        className="modal fade text-white"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-color-opacity  ">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-2 needs-validation" action="/charla">
                <div className="text-center w-100">
                  <h2 className="h2 pt-4 pb-5 f">Iniciar Sesion</h2>
                </div>
                {/*} Nombre Usuario */}
                <div className="col-12 mt-0" style={{ padding: "0 70px" }}>
                  <label htmlFor="validationCustom01" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese su nombre de usuario.
                  </div>
                </div>
                {/*} Contraseña Usuario */}
                <div className="col-12 " style={{ padding: "0 70px" }}>
                  <label htmlFor="validationCustom02" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="validationCustom02"
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese su contraseña.
                  </div>
                </div>

                <div className="col-12">
                  {/*} BOton y Texto Registrarse */}
                  <span className="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">
                    No tienes cuenta?{" "}
                    <button
                      type="button"
                      className="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#modalRegistrarse"
                    >
                      Registrarte
                    </button>
                  </span>
                </div>
                {/*} Boton Iniciar Sesion */}
                <div className="w-100 d-flex justify-content-center">
                  <button
                    className="col-12  mb-2 btn btn-success w-50"
                    type="submit"
                  >
                    {" "}
                    Iniciar Sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*} FinModal Inicio Sesion */}

      {/* <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      </div> */}

      {/* <!-- Modal datos ajustes --> */}
      <div
        className="modal fade"
        id="modalInicioDatos"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue  text-white ">
            <form className="needs-validation" action="" autoComplete="off">
              <div className="modal-header">
                <h4 className="modal-title w-100 text-center ">
                  Datos Generales
                </h4>
                <button
                  type="button"
                  className="btn-close"
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
                          className="form-control bg-white border-green"
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
                          className="form-control  bg-white border-green"
                          id="lastName"
                          placeholder="Ingrese Apellido"
                          required
                        />
                      </div>

                      <div class="col-12">
                        <label for="username" class="form-label">
                          correo electronico
                        </label>
                        <div className="input-group has-validation">
                          <span className="input-group-text border-green">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control  bg-white border-green"
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
                          className="form-control  bg-white border-green"
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
                          className="form-control  bg-white border-green"
                          id="address"
                          placeholder="Ingrese Dirreccion"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>

                <button type="submit" className="btn btn-green border-green">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Fin Modal Datos Ajustes --> */}

      {/* Modal notificaciones aceptar y rechazar  */}

      <div
        className="modal fade"
        id="modalAseptarRecha"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue  text-white">
            <div className="modal-header">
              <h5
                className="modal-title text-center w-100"
                id="exampleModalLabel"
              >
                Solicitud Charla
              </h5>
              <button
                type="button"
                className="btn-close bg-white "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-center ">
              Hola Fernando, Tu solicitud quedo asignada para el lunes 30 de
              Abril del 2023 a las 16:00:00 horas del dia, Pedimos su
              confirmacion de la solicitud
            </div>
            <div className="modal-footer mx-auto">
              <button
                type="button"
                className="btn btn-green"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
              <button type="button" className="btn btn-danger">
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fin notificacion de aseptar y rechazar */}

      {/* <!-- Modal Registrarse --> */}
      <div
        className="modal fade"
        id="modalRegistrarse"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="contenedores-modal position-relative  ">
          {/* <!-- Modal Registrarse --> */}
          <div id="modal-usuario-registro ">
            <div className="modal-dialog ">
              <div className="modal-content  bg-color-blue  text-white ">
                <form
                  className="needs-validation contenedor-registro rounded-3"
                  action="/"
                >
                  <div className="row g-3  text-white  p-4 rounded-3 ">
                    <div className="w-100 d-flex justify-content-end ">
                      <button
                        type="button"
                        className="btn-close bg-light"
                        style={{ width: "20px", height: "20px" }}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <h3 className="text-center pb-3">Regístrate</h3>

                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        Nombres
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Nombre de Usuario
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Correo
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="address"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Confirmar Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="address2"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="telefono" className="form-label">
                        Telefono
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="telefono"
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="validationGenero" className="form-label">
                        Genero
                      </label>
                      <select
                        className="form-select"
                        id="validationGenero"
                        aria-label="Default select example"
                        required
                      >
                        <option disable="true">Genero</option>
                        <option defaultValue="1">Masculino</option>
                        <option defaultValue="2">Femenino</option>
                      </select>
                    </div>

                    <div className="ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="same-address"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="same-address"
                      >
                        Recordar
                      </label>
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button
                        className="w-50 btn btn-green"
                        type="submit"
                        id="botton-registrar"
                      >
                        Registrar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fin Modal Registrarse --> */}

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
