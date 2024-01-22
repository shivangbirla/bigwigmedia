import React from'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Cards from './Components/Cards';

const App =()=>{
  return(
      <div className="min-w-screern min-h-screen bg-white ">
        <Nav/>
        <div className="px-5">

        <Hero/>
        <Menu/>
        <Cards/>
        </div>

      </div>
  );
};



export default App
