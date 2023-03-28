import Imgnav from "../../assets/img/imgnav.jpg";
import Futbol from "../../assets/img/futbol.png";
import Baloncesto from "../../assets/img/baloncesto2.jpg";
import Volei from "../../assets/img/volei.jpg";
import Charla from "../../assets/img/charla.jpg";
import Divulgacion from "../../assets/img/divulgacion.jpg";
import Psico from "../../assets/img/psico.jpg";

const Cronograma = () => {
  return (
    <>
      {/* <!-- Contenido --> */}

        <div className="col px-3">
          <div className="centrarcontenido">
            <div className="position-relative d-inline-block w-100">
              <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
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
            {/* <!--cards desde aqui--> */}
            <div className="container">
              <div className="fs-1 text-center pt-3 fw-bold">
                Eventos Disponibles
              </div>
              <div className="row card-group  d-flex flex-wrap justify-content-around">
                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img src={Futbol} className="card-img-top" alt="futbol" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Torneo De Futbol</h5>
                    <p className="card-text ">
                      El evento de ... será una gran oportunidad para que los
                      aprendices del SENA CTPI demuestren su habilidad en el
                      deporte y también su integración en el equipo.
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Desactivar Evento
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img
                    src={Baloncesto}
                    className="card-img-top"
                    alt="..."
                    id="bal"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Torneo De Baloncesto
                    </h5>
                    <p className="card-text ">
                      El evento de ... será una gran oportunidad para que los
                      aprendices del SENA CTPI demuestren su habilidad en el
                      deporte y también su integración en el equipo.
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDisabled"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDisabled"
                      >
                        Evento Inactivo
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Activar Evento
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img src={Volei} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center pt-3">
                      Torneo De Voleibol
                    </h5>
                    <p className="card-text ">
                      El evento de ... será una gran oportunidad para que los
                      aprendices del SENA CTPI demuestren su habilidad en el
                      deporte y también su integración en el equipo.
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Desactivar Evento
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img src={Charla} className="card-img-top" alt="futbol" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Charla</h5>
                    <p className="card-text ">
                      El evento de ... será una gran oportunidad para que los
                      aprendices del SENA CTPI demuestren su habilidad en el
                      deporte y también su integración en el equipo.
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Desactivar Evento
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img
                    src={Divulgacion}
                    className="card-img-top"
                    alt="..."
                    id="bal"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Divulgacion Tecnologica
                    </h5>
                    <p className="card-text ">
                      el SENA continuará promoviendo la divulgación tecnológica
                      en todos sus programas de formación. Con esta iniciativa,
                      buscamos fomentar el interés de los aprendices por las
                      nuevas tecnologías y prepararlos para enfrentar con éxito
                      los desafíos del mundo laboral en una sociedad cada vez
                      más tecnificada. .
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Desactivar Evento
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="card mx-sm-5 my-sm-5 border rounded-0"
                  id="cardd"
                >
                  <img src={Psico} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Charlas Psicologicas
                    </h5>
                    <p className="card-text ">
                      Los aprendices del SENA CTPI tendran la oportunidad de
                      participar en charlas psicológicas con el fin de mejorar
                      su bienestar emocional y su integración en el equipo.
                      Estas charlas seran muy valiosas para los aprendices, ya
                      que les permitiran comprender mejor sus emociones y
                      aprender a manejarlas de manera saludable.
                    </p>
                    <div> Fecha y Hora de Inicio </div>
                    <input
                      className="form-control"
                      type="datetime-local"
                      placeholder="selecciones fecha"
                      required
                    />
                    <br />
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Evento Activo
                      </label>
                    </div>

                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Desactivar Evento
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Cronograma;
