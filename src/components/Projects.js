import React from 'react';

const Projects = ({ brand, bussiness, title, movil, web, github, imgSize, screenshots, phone, job }) => {
  return (
    <div className="p-3">
      <div className="col-md-12">
        <div className="row">
          {brand ? <img src={brand} width={imgSize ? imgSize.width : "64"} height={imgSize ? imgSize.height : "64"} alt="brand" /> : null}
          <h2 className="mt-2 ml-3 mr-2 text-dark">{bussiness} - </h2>
          <h3 className="mt-2 ">{job}</h3>
        </div>
        <div className="mt-3">
          <div className="bg-secondary p-2 mb-2">
            <p className="text-secondary">{title}</p>
          </div>
          {
            movil ?
              <div>
                <p>
                  <strong className="text-success">
                    Aplicación móvil:
                  </strong>
                </p>
                <p>
                  <strong>Descripción: </strong>{movil.description}
                </p>
                <p>
                  <strong className="text-primary">Tecnologías: </strong >{movil.technologies}
                </p>
                <hr />
              </div>
              : null
          }
          {
            web ?
              <div>
                <p>
                  <strong className="text-warning">Aplicación web: </strong>
                </p>
                <p>
                  <strong>Descripción: </strong>{web.description}
                </p>
                <p>
                  <strong className="text-primary">Tecnologías:  </strong>{web.technologies}
                </p>

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
                  <img src={require("../assets/imgs/" + pic)} alt="Img demostración" className="col-md-12 m-0 p-0" height="415px" />
                </div>
              </div>
            ))}
          </div>
          : null
      }

      {
        github ?

          <div className="text-primary mt-2 row">
            <span className="mr-2">
              <img alt="github" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="18" height="18" />
              <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${github.client}`}>Cliente: Código fuente</a>
            </span>
            <span>
              <img alt="github" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="18" height="18" />
              <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${github.api}`}>API: Código fuente</a>
            </span>
          </div>
          : null
      }

    </div >
  );
}

export default Projects;