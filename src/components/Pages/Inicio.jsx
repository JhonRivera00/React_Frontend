import React from "react";
import Imagen1 from "../../assets/img/imgslider1.jpg";
import Imagen2 from "../../assets/img/imgslider2.jpg";
import Imagen3 from "../../assets/img/imgslider4.jpg";
import Slider from './Inicio/Slider_Inicio'
import ContenidoInicio from './Inicio/ContenidoInicio'


const Contenido = () => {
  return (<>
    <Slider/>
    <div className="card-group d-flex justify-content-around">

      <div className="card mx-sm-5 my-sm-5 border rounded-0">
        <img className="card-img-top"
        src={Imagen2}
        alt="slider4" />
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
            <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
              Click aqui
            </a>
          </p>
        </div>
        <div className="card-footer bg-green">
          <small className="text-muted1">
            Ultima actualización hace 3 minutos..
          </small>
        </div>
      </div>

      <div className="card mx-sm-5 my-sm-5 border rounded-0">
        <img
          className="card-img-top"
          src={Imagen3}
          alt="slider1"
        />
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
            <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
              Click aqui
            </a>
          </p>
        </div>
        <div className="card-footer bg-green">
          <small className="text-muted1">
            Ultima actualización hace 3 minutos..
          </small>
        </div>
      </div>

      <div className="card mx-sm-5 my-sm-5 border rounded-0">
        <img
          className="card-img-top"
          src={Imagen1}
          alt="slider1"
        />
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
            <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
              Click aqui
            </a>
          </p>
        </div>
        <div className="card-footer bg-green">
          <small className="text-muted1">
            Ultima actualización hace 3 minutos..
          </small>
        </div>
      </div>

      <div className="card-group d-flex flex-wrap justify-content-around">
        <div className="card mx-sm-5 my-sm-5 border rounded-0">
          <img className="" src={Imagen1} alt="slider1" />
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
              <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
                Click aqui
              </a>
            </p>
          </div>
          <div className="card-footer bg-green">
            <small className="text-muted1">
              Ultima actualización hace 3 minutos..
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
              <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx">
                Click aqui
              </a>
            </p>
          </div>
          <div className="card-footer bg-green">
            <small className="text-muted1">
              Ultima actualización hace 3 minutos..
            </small>
          </div>
        </div>
      </div>
    </div>
    <ContenidoInicio/>
    </>
  );
};

export default Contenido;
