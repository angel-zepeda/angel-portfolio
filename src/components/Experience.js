import React from 'react';

const Experience = () => {
  return (
    <div className="container mt-5" id="software">
      <h1 style={{ borderLeft: '5px solid orange' }} className="pl-2">
        <strong>
          Experiencia
        </strong>
      </h1>
      <div className="card p-3">
        <div className="col-md-12">
          <div className="row">
            <img src="https://pbs.twimg.com/profile_images/1179440892685541376/f2CJLhc5_400x400.jpg" width="64" height="64" />
            <h2 className="mt-2 ml-3 mr-2">3 Hermanos - </h2>
            <h2 className="mt-2 text-primary">Full-stack software developer</h2>
          </div>
          <div className="mt-3">
            <strong>
              <p>
                Aplicación móvil y aplicación web que permite a la empresa evaluar aspecto y llevar el control de todas las sucursales en la República.
              </p>
            </strong>
            <p className="mt-2">Producto desarrollado:</p>
            <ul>
              <li>Aplicación móvil: </li>
              <ul>
                <li>Descripción: La aplicación permite a los gerentes y supervisores 3hermanos evaluar aspectos tales como limpieza y orden de los productos.
                  Cada reporte es apoyado con evidencia fotográfica y firma digital del evaluador.
                </li>
                <li>Tecnologías: Ionic v3, MongoDB, ExpressJS, NodeJS</li>
              </ul>
            </ul>
            <ul>
              <li>Aplicación web: </li>
              <ul>
                <li>Descripción: La aplicación permite al director gral. revisar y consultar los reportes realizados, pueden ser ordenados por fecha y generar un PDF para su envio por correo.
                </li>
                <li>Tecnologías: React JS, MongoDB, ExpressJS, NodeJS</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="card p-3">
        <div className="col-md-12">
          <div className="row">
            <img src="https://pbs.twimg.com/profile_images/1179440892685541376/f2CJLhc5_400x400.jpg" width="64" height="64" />
            <h2 className="mt-2 ml-3 mr-2">3 Hermanos - </h2>
            <h2 className="mt-2 text-primary">Full-stack software developer</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="card p-3">
        <div className="col-md-12">
          <div className="row">
            <img src="https://pbs.twimg.com/profile_images/1179440892685541376/f2CJLhc5_400x400.jpg" width="64" height="64" />
            <h2 className="mt-2 ml-3 mr-2">3 Hermanos - </h2>
            <h2 className="mt-2 text-primary">Full-stack software developer</h2>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Experience;