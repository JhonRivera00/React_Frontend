
import React from "react";

import Zyro from '../../../assets/img/zyro-image.png'
import Bullseye from '../../../assets/img/icons/bullseye.svg'
import Circle1 from '../../../assets/img/icons/1-circle.svg'
import Circle2 from '../../../assets/img/icons/2-circle.svg'
import Circle3 from '../../../assets/img/icons/3-circle.svg'
import Opjetivo from '../../../assets/img/opjetivo1.webp'
import Video from '../../../assets/img/videos/Bienestar al Aprendiz SENA.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const Conocenos = () => {
  return (
    <>
      {/* <!-- Inicio Section --> */}
      <section class="">
        <img src={Zyro} class="titulo-objetivo" alt="" />
        <div class="px-5 py-5">
          <p class="fs-3 fw-semibold"><img src={Bullseye} alt="" class="pe-3" /> OBJETIVOS</p>
          <hr class="w-25" />
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="">
                <p class="fs-5 fw-semibold"> <img src={Circle1} class="me-3" alt="" />Objetivo </p>
                <p>Implementar estrategias de acompañamiento para el desarrollo integral del aprendiz en su proceso formativo.</p>
                <p class="fs-5 fw-semibold"><img src={Circle2} class="me-3" alt="" />Objetivo </p>
                <p>Incentivar al aprendiz en su proceso de formación profesional integral mediante la implementación de un programa de estímulos.</p>
                <p class="fs-5 fw-semibold"> <img src={Circle3} class="me-3" alt="" />Objetivo </p>
                <p>Entregar con oportunidad y calidad los servicios de bienestar al aprendiz documentando procedimientos que soporten una operación ágil y flexible.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <img src={Opjetivo} class="img-obj" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Fin section --> */}

      {/* <!-- Video --> */}
      <section class="video">
        <p class="fs-1 fw-semibold d-flex justify-content-center titulos">
          VIDEO PRESENTACION
        </p>
        <video src={Video} width="640" height="580" controls></video>
      </section>

      {/* <!-- Fin Video --> */}

      <div class="text-center py-5 d-flex justify-content-center">
        <div class="w-75">

          <h1>¿Quiénes pueden acceder al Plan de Bienestar al Aprendiz?</h1>
          <p class="mt-4">Aprendices matriculados en formación Laboral y Formación tecnológica, de todos los niveles y jornadas, en sus diferentes modalidades: presencial, virtual o a distancia.
            Los Centros de Formación Profesional Integral incorporarán estrategias para la inclusión de aprendices pertenecientes a las comunidades minoritarias y vulnerables</p>
        </div>
      </div>
      
    </>
  );
};

export default Conocenos;

