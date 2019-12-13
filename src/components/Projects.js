import React from 'react';

const Projects = ({ brand, bussiness, title, movil, web, github, imgSize, screenshots, phone }) => {
  return (
    <div className="p-3">
      <div className="col-md-12">
        <div className="row">
          {brand ? <img src={brand} width={imgSize ? imgSize.width : "64"} height={imgSize ? imgSize.height : "64"} alt="brand" /> : null}
          <h2 className="mt-2 ml-3 mr-2 text-dark">{bussiness} - </h2>
          <h3 className="mt-2 ">Full-stack software developer</h3>
        </div>
        <div className="mt-3">
          <strong><p>{title}</p></strong>
          <p className="mt-2">Producto desarrollado:</p>
          {
            movil ?
              <div>
                <ul>
                  <li>Aplicación móvil: </li>
                  <ul>
                    <li>Descripción: {movil.description}</li>
                    <li className="text-primary">Tecnologías: <strong >{movil.technologies}</strong></li>
                  </ul>
                </ul>
                <div className="row">
                </div>
              </div>
              : null
          }
          {
            web ?
              <div>
                <ul>
                  <li>Aplicación web: </li>
                  <ul>
                    <li>Descripción: {web.description}</li>
                    <li className="text-primary">Tecnologías:  <strong>{web.technologies}</strong></li>
                  </ul>
                </ul>
                <div className="row">

                </div>
              </div>
              : null
          }

        </div>
      </div>

      {
        screenshots ?
          <div className="row">
            {screenshots.map(pic => (
              <div key={pic} className="card col-md-5 mx-auto m-2 shadow img-project p-0">
                <div className="card-body p-2">
                  <img src={require("../assets/imgs/" + pic)} alt="Img demostración" className="col-md-12 m-0 p-0" height="100%" />
                </div>
              </div>
            ))}
          </div>
          : null
      }

      {
        phone ?
          <div className="row">
            {phone.map(pic => (
              <div key={pic} className="card col-md-2 mx-auto m-2 shadow img-project p-0">
                <div className="card-body p-2 ">
                  <img src={require("../assets/imgs/" + pic)} alt="Img demostración" className="col-md-12 m-0 p-0" height="264px" />
                </div>
              </div>
            ))}
          </div>
          : null
      }


      <div className="text-right mt-2">
        <p>
          <img alt="github" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="32" height="32" />
          <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${github}`}>Código fuente</a>
        </p>
      </div>
    </div >
  );
}

export default Projects;