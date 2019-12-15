import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div className="container-fluid  mt-5" id="about-me">
      <h1 style={{ borderLeft: '5px solid brown' }} className="pl-2 mb-3">
        <strong>
          Sobre mi
        </strong>
      </h1>
      <div>
        <h2 className="text-primary">
          Soy un desarrollador Fullstack apasionado por el desarrollo de aplicaciones web, la colaboración y el aprendizaje.
      </h2>
        <hr />
        <h5>
          Siempre he buscado nuevos desafíos que sean significativos para mi. Como desarrollador web disfruto de tener la posibilidad de cambiar el mundo, poder apreciar todo el conocimiento nuevo que se obtiene día a día y generar beneficios de gran impacto a empresas de alto crecimiento.
        </h5>
      </div>
      <Skills />
    </div>
  );
}

export default About;