import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small teal pt-4 bg-dark text-white ">
      <div className="footer-copyright text-center py-3">
        <span>El software cambiará al mundo.</span>
      </div>
      <div className="text-center text-md-left mx-auto" style={{ width: "90%" }}>
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Contacto</h5>
            <ul style={{ listStyle: 'none' }}>
              <li>Tel: (+52) 55 60-40-18-30</li>
              <li>Email: angel.zepeda0508@gmail.com</li>
              <li>Github: github.com/angel-zepeda</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2019 Copyright:
        Angel Zepeda
      </div>
    </footer>
  );
}

export default Footer;