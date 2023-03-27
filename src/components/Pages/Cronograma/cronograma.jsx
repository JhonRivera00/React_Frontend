
import Imgnev from "../../../assets/img/imgnav.jpg";
import Calentdar2 from '../../../assets/img/icons/calendar2-week.svg'
import Check from '../../../assets/img/icons/check-circle.svg'


const Cronograma = () => {
  return (
    <>
      {/* <!-- Titulo --> */}
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnev} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center  w-100">
          CRONOGRAMA
          <div className=" d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* <!-- Fin Titulo --> */}

      {/* <!-- Inicio Contenido --> */}
      <main className="px-5 py-5">
        <p className="fs-3 fw-semibold ms-0 ms-lg-4 my-0 my-lg-4 ">
          <img src={Calentdar2} className="me-4" alt="" />
          LISTADO DE ACTIVIDADES
        </p>
        <hr />
        <div className="container-fluid mt-6">
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3 ">
                <p className="fs-5 fw-bold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Dia del aprendiz
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Doloribus sit
                  odio inventore aspernatur quia iusto. Quia odio asperiores
                  minima.
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Agora CTPI
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 10:00 AM - 12:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Lunes - 15 Diciembre, 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3">
                <p className="fs-5 fw-bold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Despedida de los aprendices
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Coliseo
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 4:00 AM - 6:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Martes - 16 Diciembre, 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6  my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3">
                <p className="fs-5 fw-bold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Despedida de año en compañia de grupos musicales{" "}
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Agora CTPI
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 10:00 AM - 12:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Miercoles - 17 Diciembre, 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3">
                <p className="fs-4 fw-semibold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Dia del aprendiz
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Agora CTPI
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 10:00 AM - 12:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Lunes - 15 Diciembre, 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3">
                <p className="fs-4 fw-semibold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Dia del aprendiz
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Agora CTPI
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 10:00 AM - 12:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Lunes - 15 Diciembre, 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
              <div className="border-green mx-2 px-4 py-3">
                <p className="fs-4 fw-semibold">
                  {" "}
                  <img src={Check} className="me-3" alt="" />
                  Dia del aprendiz
                </p>
                <p className="fs-6  m-0">
                  <b>Descripcion:</b> Participa de grandes premios
                </p>
                <p className="fs-6  m-0">
                  <b>Lugar:</b> Agora CTPI
                </p>
                <p className="fs-6  m-0">
                  <b>Hora:</b> 10:00 AM - 12:00 AM
                </p>
                <p className="fs-6 fw-semibold text-muted m-0 mt-3 w-100">
                  {" "}
                  Lunes - 15 Diciembre, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Cronograma;
