import React from "react";
import Imagen1 from "../../../assets/img/imgslider1.jpg";
import Imagen2 from "../../../assets/img/imgslider2.jpg";
import Imagen3 from "../../../assets/img/imgslider4.jpg";


const Slider = () => {
  return (
    <div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Imagen1}
              className="d-block w-100 img-slider mb-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-color-blue w-75 mx-auto">
              <h5 className="fs-2">Bienvenido al primer curso digital</h5>
              <p className="fs-5">
                Este curso lo encontraras disponible en nuestra pagina oficial
                podras inscribirte y hacerte participe de los eventos que se
                iran realizando a medida de los avances
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Imagen2}
              className="d-block w-100 img-slider mb-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-color-blue w-75 mx-auto">
              <h5 className="fs-2">Bienvenido al primer curso digital</h5>
              <p className="fs-5">
                Este curso lo encontraras disponible en nuestra pagina oficial
                podras inscribirte y hacerte participe de los eventos que se
                iran realizando a medida de los avances
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Imagen3}
              className="d-block w-100 img-slider mb-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-color-blue w-75 mx-auto">
              <h5 className="fs-2">Bienvenido al primer curso digital</h5>
              <p className="fs-5">
                Este curso lo encontraras disponible en nuestra pagina oficial
                podras inscribirte y hacerte participe de los eventos que se
                iran realizando a medida de los avances
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
