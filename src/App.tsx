import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/home/Home";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import "./App.css";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastoUsuario/CadastroUsuario";
import ListaTema from "./componentes/temas/listatema/ListaTema";
import ListaPostagem from "./componentes/postagens/listapostagem/ListaPostagem";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />
          
          <Route path="/posts" element={<ListaPostagem />} />
        
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}
export default App;
