import React from 'react'
import Imagen1 from "../../assets/img/imgslider1.jpg";
import Imagen2 from "../../assets/img/imgslider2.jpg";
import Imagen3 from "../../assets/img/imgslider4.jpg";
import ImagenTitulo from '../../assets/img/imgnav.jpg';
import Threevertical from '../../assets/img/icons/three-dots-vertical.svg'

function inicio() {
    return (
        <div >
            {/* Contenido */}
            <div className="col-12 ">
                <div className="position-relative d-inline-block w-100" >
                    <img src={ImagenTitulo} className="w-100 img-titulo-fondo" alt="" />
                    <h1 className="text-titulo position-absolute text-center  w-100">EVENTOS
                        <div className=" d-flex justify-content-around pt-2">
                            <div className="bg-green p-1 w-25" ></div>
                            <div className="bg-green p-1 w-25" ></div>
                        </div>
                    </h1>
                </div>
                {/* Inicio Intro */}
                <div className="card-group d-flex flex-wrap justify-content-around">
                    <div className="card mx-sm-5 my-sm-5 border rounded-0">
                        <img className="card-img-top" src={Imagen1} alt="slider1" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center mb-3">
                                Bienvenido al primer curso digital
                            </h5>
                            <p className="card-text">
                                Este curso lo encontraras disponible en nuestra pagina oficial
                                podras inscribirte y hacerte participe de los eventos que se iran
                                realizando a medida de los avances
                            </p>
                            <p>
                                Mas info en:
                                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</a>
                            </p>
                        </div>
                        <div className="card-footer bg-green">
                            <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
                                <div className="dropdown">
                                    <a href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></a>
                                    <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                        <li><a className="dropdown-item" href="#">Editar</a></li>
                                        <li><a className="dropdown-item" href="#">Inhabilitar</a></li>
                                        <li><a className="dropdown-item" href="#">Habilitar</a></li>
                                    </ul>
                                </div>
                            </small>
                        </div>
                    </div>

                    <div className="card mx-sm-5 my-sm-5 border rounded-0">
                        <img className="card-img-top" src={Imagen2} alt="slider1" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center mb-3">
                                Bienvenido al primer curso digital
                            </h5>
                            <p className="card-text">
                                Este curso lo encontraras disponible en nuestra pagina oficial
                                podras inscribirte y hacerte participe de los eventos que se iran
                                realizando a medida de los avances
                            </p>
                            <p>
                                Mas info en:
                                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</a>
                            </p>
                        </div>
                        <div className="card-footer bg-green">
                            <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
                                <div className="dropdown">
                                    <a href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></a>
                                    <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                        <li><a className="dropdown-item" href="#">Editar</a></li>
                                        <li><a className="dropdown-item" href="#">Inhabilitar</a></li>
                                        <li><a className="dropdown-item" href="#">Habilitar</a></li>
                                    </ul>
                                </div>
                            </small>
                        </div>
                    </div>

                    <div className="card mx-sm-5 my-sm-5 border rounded-0">
                        <img className="card-img-top" src={Imagen3} alt="slider4" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center mb-3">
                                Bienvenido al primer curso digital
                            </h5>
                            <p className="card-text">
                                Este curso lo encontraras disponible en nuestra pagina oficial
                                podras inscribirte y hacerte participe de los eventos que se iran
                                realizando a medida de los avances
                            </p>
                            <p>
                                Mas info en:
                                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</a>
                            </p>
                        </div>
                        <div className="card-footer bg-green">
                            <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
                                <div className="dropdown">
                                    <a href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></a>
                                    <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                        <li><a className="dropdown-item" href="#">Editar</a></li>
                                        <li><a className="dropdown-item" href="#">Inhabilitar</a></li>
                                        <li><a className="dropdown-item" href="#">Habilitar</a></li>
                                    </ul>
                                </div>
                            </small>
                        </div>
                    </div>
                    <div className="card mx-sm-5 my-sm-5 border rounded-0">
                        <img className="card-img-top" src={Imagen1}alt="slider1" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center mb-3">
                                Bienvenido al primer curso digital
                            </h5>
                            <p className="card-text">
                                Este curso lo encontraras disponible en nuestra pagina oficial
                                podras inscribirte y hacerte participe de los eventos que se iran
                                realizando a medida de los avances
                            </p>
                            <p>
                                Mas info en:
                                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</a>
                            </p>
                        </div>
                        <div className="card-footer bg-green">
                            <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
                                <div className="dropdown">
                                    <a href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></a>
                                    <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                        <li><a className="dropdown-item" href="#">Editar</a></li>
                                        <li><a className="dropdown-item" href="#">Inhabilitar</a></li>
                                        <li><a className="dropdown-item" href="#">Habilitar</a></li>
                                    </ul>
                                </div>
                            </small>
                        </div>
                    </div>

                    <div className="card mx-sm-5 my-sm-5 border rounded-0">
                        <img className="card-img-top" src={Imagen2} alt="slider4" />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-center mb-3">
                                Bienvenido al primer curso digital
                            </h5>
                            <p className="card-text">
                                Este curso lo encontraras disponible en nuestra pagina oficial
                                podras inscribirte y hacerte participe de los eventos que se iran
                                realizando a medida de los avances
                            </p>
                            <p>
                                Mas info en:
                                <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">Click aqui</a>
                            </p>
                        </div>
                        <div className="card-footer bg-green">
                            <small className="text-muted1 d-flex justify-content-between pt-0">Ultima actualización hace 3 minutos..
                                <div className="dropdown">
                                    <a href="" className=" float-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><img src={Threevertical} className="bg-white rounded p-2 bg-opacity-25 border" alt="" /></a>
                                    <ul className="dropdown-menu border-green" aria-labelledby="dropdownMenuButton1" >
                                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                        <li><a className="dropdown-item" href="#">Editar</a></li>
                                        <li><a className="dropdown-item" href="#">Inhabilitar</a></li>
                                        <li><a className="dropdown-item" href="#">Habilitar</a></li>
                                    </ul>
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
                {/* Fin Intro */}
            </div>
            {/* Fin Contenido */}
        </div>
    )
}

export default inicio
