
import Imgnav from "../../assets/img/imgnav.jpg";
import Theree from '../../assets/img/icons/three-dots-vertical.svg'
import Pencil from '../../assets/img/icons/pencil-square.svg'
import Person from '../../assets/img/icons/person-lines-fill.svg'


const Solicitudes = () => {
  return (
    <>
      {/* <!-- Contenido --> */}

      <div className="position-relative d-inline-block w-100" >
            <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
            <h1 className="text-titulo position-absolute text-center  w-100">LISTA DE SOLICITUDES
              <div className=" d-flex justify-content-around pt-2">
                 <div className="bg-green p-1 w-25" ></div>
                 <div className="bg-green p-1 w-25" ></div>
              </div>
            </h1>
          </div>

      {/* <!-- Fin Titulo --> */}

      {/* <!-- Inicio Contenido --> */}
<div className="table-responsive w-100">
      <table className="table caption-top mt-5 w-100">
        <thead>
          <tr className="bg-color-blue text-white">
            <th scope="col">
              <img
                src={Person}
                alt=""
                className=" bg-green-opacity p-2 rounded-2"
              />
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">Identificacion</th>
            <th scope="col">Ficha</th>
            <th scope="col">Estado</th>
            <th scope="col">
             Roll
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jhoan Muñoz</td>
            <td>1002819827</td>
            <td>2452639</td>
            <td className=" link-light ">
              <div >
              <p className="bg-success rounded-pill text-center w-75"> Habilitado</p>
              </div>
              </td>
            <td>
              <div className="dropdown">
                <a
                  href=""
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={Theree}
                    className="bg-green rounded p-2 bg-opacity-25 border"
                    alt=""
                  />
                </a>
                <ul
                  className="dropdown-menu border-green"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Inhabilitar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Habilitar
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Solicitudes;