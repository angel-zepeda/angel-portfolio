import React from 'react';
import $ from "jquery";
const Banner = () => {

  const expandMore = e => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: ($("#about-me").offset().top) }, 1000);
  }

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
        backgroundImage: "url('https://images.unsplash.com/photo-1456996290209-634ae6b8be31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}
    >
      <div
        style={{ position: 'fixed' }}
        className="col-md-12 p-4 text-white" id="nav">
        <div className="container">
          <div className="row">
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
        <h1 style={{ fontSize: '4.2em', letterSpacing: '20px' }} className="text-white col-md-12">ANGEL ZEPEDA</h1>
        <h5 className="text-white">Ingeniero en computación, entusiasta por el software y desarrollo web</h5>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '85%',
        }}
        className="col-md-12 text-center">
        <h4 className="text-white">CONOCER MAS</h4>
        <button onClick={expandMore} className="btn"><i className="material-icons">expand_more</i></button>

      </div>
    </div>
  );
}

export default Banner;