
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

      <table className="table caption-top mt-5">
        <div className="col-9">
          <h1 />
        </div>
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
            <th scope="col">Apellido</th>
            <th scope="col">Ficha</th>
            <th scope="col">
              <img
                src={Pencil}
                alt=""
                className=" bg-green-opacity p-2 rounded-2"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jhoan</td>
            <td>Muñoz</td>
            <td>24526439</td>
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
          <tr>
            <th scope="row">2</th>
            <td>Jhon</td>
            <td>Rivera</td>
            <td>2452439</td>
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
          <tr>
            <th scope="row">3</th>
            <td>Miguel</td>
            <td>Ledezma</td>
            <td>2452439</td>
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
          <tr>
            <th scope="row">3</th>
            <td>Santiago</td>
            <td>Vidal</td>
            <td>2452439</td>
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
          <tr>
            <th scope="row">1</th>
            <td>Jhoan</td>
            <td>Muñoz</td>
            <td>24526439</td>
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
          <tr>
            <th scope="row">2</th>
            <td>Jhon</td>
            <td>Rivera</td>
            <td>2452439</td>
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
          <tr>
            <th scope="row">3</th>
            <td>Miguel</td>
            <td>Ledezma</td>
            <td>2452439</td>
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
          <tr>
            <th scope="row">3</th>
            <td>Santiago</td>
            <td>Vidal</td>
            <td>2452439</td>
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

      {/* <!-- Fin Contenido --> */}
    </>
  );
};

export default Solicitudes;