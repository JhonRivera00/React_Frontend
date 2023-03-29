import Imgnav from "../../assets/img/imgnav.jpg";

const Charlas = () => {
  return (
    <>
    
    
      <div className="position-relative d-inline-block w-100">
        <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
        <h1 className="text-titulo position-absolute text-center w-100">
          CHARLAS
          <div className="d-flex justify-content-around pt-2">
            <div className="bg-green p-1 w-25"></div>
            <div className="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      {/* Fin Titulo */}

      {/* Inicio Contenido*/}
      <main className=" py-5">
        <div className="table-responsive">
          <table className="table table-hover table-sm border-green">
            <thead className="border-1">
              <tr className="table-active bg-color-blue text-white">
                <th>APRENDIZ</th>
                <th>FICHA</th>
                <th>MOTIVO</th>
                <th>ESTADO</th>
                <th>CORREO</th>
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="paciente">Jhon Alexander Rivera</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/*  Button trigger modal  */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="ms-xl-3 mt-2 mt-xl-0 btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              {/* Modal */}
              <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        SOLICITUD ACEPTADA
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        SOLICITUD APLAZADA
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/*  Button trigger modal  */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
            </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/*  Button trigger modal  */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/* Button trigger modal*/}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/* Button trigger modal */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/*  Button trigger modal */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion">
                  {/* Button trigger modal */}
                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" className="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    
  
    </>
  );
};

export default Charlas;
