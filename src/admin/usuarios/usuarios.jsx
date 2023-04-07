
import Imgnav from '../../assets/img/imgnav.jpg'
import Three from '../../assets/img/icons/three-dots-vertical.svg'
import Person from '../../assets/img/icons/person-lines-fill.svg'
import Pencil from '../../assets/img/icons/pencil-square.svg'



const Usuarios = () => {
    return (
        <>

            {/* <!-- Contenido --> */}

            <div className="col">

                <div className="position-relative d-inline-block w-100" >
                    <img src={Imgnav} className="w-100 img-titulo-fondo" alt="" />
                    <h1 className="text-titulo position-absolute text-center  w-100">PQRS
                        <div className=" d-flex justify-content-around pt-2">
                            <div className="bg-green p-1 w-25" ></div>
                            <div className="bg-green p-1 w-25" ></div>
                        </div>
                    </h1>
                </div>
                {/* <!-- Fin Titulo --> */}

                {/* <!-- Inicio Contenido --> */}
                <div className='table w-100 mt-2'>


                    <table className="table-responsive caption-top w-100">
                        <thead>
                            <tr className='text-white' style={{ backgroundColor: '#00324d' }} >

                                <th className='col-1'><img src={Person} alt="" className="ms-2 bg-green-opacity p-2 rounded-2" /></th>
                                <th className='col-3'>Nombres</th>
                                <th className='col-2'>Ficha</th>
                                <th className=' col-5' >Pqrs</th>
                                <th className='col-1'><img src={Pencil} alt="" className=" bg-green-opacity p-2 rounded-2" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Jhoana</td>
                                <td>2452439</td>
                                <td className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                                    Este es un texto largo que se truncará si es demasiado largo. Puedes hacer clic en el botón para leerlo completo.
                                </td>

                                <button className="btn btn-link" type='button' data-bs-toggle="collapse" data-bs-target="#texto-completo">Leer completo</button>
                                <div id="texto-completo" className="collapse">
                                    Este es un texto largo que se mostrará completo al hacer clic en el botón. ¡Genial!
                                </div>
                                <td>

                                    <button className='bg-success text-white rounded-pill text-center'>Responder</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


            {/* <!-- Fin Contenido --> */}
        </>
    )
}

export default Usuarios;