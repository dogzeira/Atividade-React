import React from 'react';
import Home from './paginas/home/Home';
import Navbar from "./componentes/estaticos/navbar/Navbar"
import Footer from "./componentes/estaticos/footer/Footer"
import './App.css';




function App() {

  return (
  <>
  <div className="img-fundo">
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
    </>
   
  
  );
}
export default App;
