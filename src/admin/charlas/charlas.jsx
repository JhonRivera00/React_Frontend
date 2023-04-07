import Imgnav from "../../assets/img/imgnav.jpg";
import users from "../../assets/img/users.png";
import users1 from "../../assets/img/user1.png";

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
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="paciente">Jhon Alexander Rivera</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="descripcion">
                  <a className="text-decoration-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ cursor: "pointer" }}> Ver mas...</a>
                </td>
              </tr>

              <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="staticBackdropLabel">
                        SOLICITUD
                      </h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className=" modal-body">
                      <h5>Psicologia</h5>
                      <div className="row mt-4 ">
                        <div className="col-2">
                          <img className="w-100 rounded-circle" src={users1} />
                        </div>
                        <div className="col-3">
                          <div className=" d-flex">
                            <p className=" fw-bold">Aprendiz: </p>
                            <p className="ms-2">  Jhon Rivera</p>
                          </div>
                          <div className=" d-flex">
                            <p className=" fw-bold">Ficha: </p>
                            <p className="ms-2">2452439</p>
                          </div>
                          <div className=" d-flex">
                            <p className=" fw-bold">Telefono: </p>
                            <p className="ms-2">3174835424</p>
                          </div>
                          <div className=" d-flex">
                            <p className=" fw-bold">Correo: </p>
                            <p className="ms-2">riverajhon052@gmail.com</p>
                          </div>
                          <p></p>
                        </div>
                        <div className="col-6">
                          <div className=" d-flex">
                            <p className=" fw-bold">Motivo: </p>
                            <p className="ms-2">Problema Familiar</p>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                        Aceptar
                      </button>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAplazar" >
                        Aplazar
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </tbody>
          </table>
        </div>
      </main>

      {/* Modal CREAR EVENTO */}
      <div className="modal fade" id="modalAplazar" tabIndex="-1" aria-labelledby="exampleModalINLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-color-blue text-white">
            <div className="modal-header">
              <h3 className="modal-title w-100 text-center " id="exampleModalINLabel">Aplazamiento</h3>
            </div><br></br>
                 
            <div className="modal-body">
              <form className="row g-2 needs-validation" action="/">
               
                {/* Fecha y hora de inicio */}
                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}>
                  <label htmlFor="validationCustom02" className="form-label">FECHA Y HORA APLAZAMIENTO</label>
                  <input type="datetime-local" className="form-control" id="validationCustom02" required />
                </div>
               
                {/* Seleccionar instructor */}
                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                  <label htmlFor="exampleFormControlSelect1" className="form-label">SELECCIONAR PROFECIONAL</label>
                  <select className="form-control" id="exampleFormControlSelect1" defaultValue="1">
                    <option value="1" disabled>Seleccionar...</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                    <option value="6">5</option>
                  </select>
                </div>

                 {/* Motivo aplazamiento */}
                <div className="col-12 mt-0" style={{ padding: "0 50px 0 50px" }}><br></br>
                  <label htmlFor="validationCustom01" className="form-label">MOTIVO APLAZAMIENTO</label>
                  <textarea type="text" className="form-control" id="validationCustom01" required />
                </div>

                {/* Botón CREAR EVENTO */}
                <div className="col-12 d-flex justify-content-center mb-2 pb-6 pt-2">
                  <button className="btn btn-green w-25" type="submit">Aplazar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FinModal MODAL CREAR EVENTO */}


    </>
  );
};

export default Charlas;
