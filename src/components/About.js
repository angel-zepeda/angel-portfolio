import React from 'react';

const About = () => {
  return (
    <div className="container mt-5" id="about-me">
      <h1 style={{ borderLeft: '5px solid brown' }} className="pl-2">
        <strong>
          Sobre mi
        </strong>
      </h1>
      <div className="card p-3">
        <h2>
          Soy un desarrollador Fullstack apasionado por el desarrollo de aplicaciones web, la colaboración y el aprendizaje.
      </h2>
        <hr />
        <h4>Siempre he buscado nuevos desafíos que sean significativos para mi. Como desarrollador web disfruto de tener la posibilidad de cambiar el mundo, poder apreciar todo el conocimiento nuevo que se obtiene día a día y generar beneficios de gran impacto a empresas de alto crecimiento.</h4>
      </div>
      <hr />
      <h3>Enfoque actual: <span className="text-primary">MERN Stack, Ruby on Rails, Linux</span></h3>
    </div>
  );
}

export default About;