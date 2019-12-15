import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Photo from './components/Photo';

const App = () => {
  return (
    <div>
      <Banner />
      <div className="card shadow mt-2 mx-auto pl-2 m-0" style={{ width: "90%" }}>
        <Photo />
        <About />
        <br />
        <Experience />
      </div>
      <Footer />
    </div >
  );
}

export default App;