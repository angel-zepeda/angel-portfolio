import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';

const App = () => {
  return (
    <div>
      <Banner />
      <div className="card shadow mt-2 mx-auto p-3" style={{ width: "80%" }}>
        <About />
        <Experience />
      </div>
    </div >
  );
}

export default App;