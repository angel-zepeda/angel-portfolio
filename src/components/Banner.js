import React from 'react';
// import $ from "jquery";

const Banner = () => {

  // const expandMore = e => {
  //   e.preventDefault();
  //   $("html, body").animate({ scrollTop: ($("#about-me").offset().top) }, 1000);
  // }

  window.onscroll = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("nav").style.background = "rgba(0,0,0,0.6)";
    } else {
      document.getElementById("nav").style.background = "rgba(0,0,0,0.0)";

    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

      }}
    >
      <div
        style={{ position: 'fixed', zIndex: '100' }}
        className="col-md-12 p-4 text-white" id="nav">
        <div className="container ">
          <div className="row ">
            <span>Angel Zepeda</span>
            <span className="ml-3">Software</span>
            <span className="ml-3">Github</span>
            <span className="ml-3">Contacto</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '37%',
        }}
        className="col-md-12 text-center">
        <h1 style={{ fontSize: '4.2em', letterSpacing: '20px' }} className="text-dark col-md-12 ">ANGEL ZEPEDA</h1>
        <h4 className="text-dark">Ingeniero en computación, entusiasta por el software y desarrollo web</h4>
      </div>

      {/* <div
        style={{
          position: 'absolute',
          top: '85%',
        }}
        className="col-md-12 text-center">
        <h4 className="text-white">CONOCER MAS</h4>
        <button onClick={expandMore} className="btn btn-link"><i className="material-icons">expand_more</i></button>
      </div> */}
    </div>
  );
}

export default Banner;