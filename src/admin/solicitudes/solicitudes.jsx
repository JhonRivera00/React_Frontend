
import Imgnav from "../../assets/img/imgnav.jpg";
// import Theree from '../../assets/img/icons/three-dots-vertical.svg'
// import Pencil from '../../assets/img/icons/pencil-square.svg'
import Person from '../../assets/img/icons/person-lines-fill.svg'
import search from '../../assets/img/icons/search.svg'


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


      {/* Buscador */}

      <div className="row">

        <div className="input-group w-75 mt-4">
          <input type="search" className="form-control rounded" placeholder="Buscar..." aria-label="Search" aria-describedby="search-addon" />
          <img src={search} className="btn btn-outline-primary" alt="" />
        </div>
        {/* Fin buscador */}

        {/* Seleccionar filtro */}
        <div className="mt-0 w-25 mt-4 ">
          {/* <label htmlFor="exampleFormControlSelect1" className="form-label">FILTRO</label> */}
          <select className="form-control" id="exampleFormControlSelect1" defaultValue="1">
            <option value="1" disabled>FILTRO...</option>
            <option value="2">Destacados</option>
            <option value="3">Noticias</option>
          </select>
        </div>

      </div>


      {/* Fin selecionar filtro */}


      {/* <!-- Inicio Contenido --> */}
      <div className="table-responsive w-100">
        <table className="table caption-top mt-3 w-100">
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
              <th Roll scope="col text-center">Roll</th>
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
                <div className="form-check form-switch">
                  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                  <p className="text-muted">Aprendiz</p>
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