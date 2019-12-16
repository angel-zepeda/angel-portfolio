import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div className="container-fluid  mt-5" id="about-me">
      <h1 className="mb-3">
        <strong className="card col-md-2">
          Sobre mí
        </strong>
      </h1>
      <div>
        <h4 className="text-primary">
          Soy un desarrollador Fullstack apasionado por el desarrollo de aplicaciones web, la colaboración y el aprendizaje.
      </h4>

        <h5>
          Siempre he buscado nuevos desafíos que sean significativos para mí. Como desarrollador web disfruto de tener la posibilidad de cambiar el mundo, poder apreciar todo el conocimiento nuevo que se obtiene día a día y generar beneficios de gran impacto a empresas de alto crecimiento.
        </h5>
      </div>
      <hr />
      <Skills />
    </div >
  );
}

export default About;