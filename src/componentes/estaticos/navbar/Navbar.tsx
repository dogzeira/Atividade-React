import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";
import { Navigate } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout(){
    setToken("")
    alert ("Usuário deslogado")
    navigate ("/login")

  }
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#040303" }} variant="dense">
          <Box className="cursor">
            <img
              src="https://i.imgur.com/ajeO6Na.png"
              alt="logo"
              height={80}
              width={200}
            />
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home"className="cursor"> 
            <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
             </Link >
             <Link to="/posts"className="cursor">
             <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>
            <Link to="/temas"className="cursor">
            <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            </Link>
            <Link to="formularioTema"className="cursor">
            <Box mx={1} >
              <Typography variant="h6" color="inherit">
                Cadastrar tema
              </Typography>
            </Box>
            </Link>
            
              
              <Box mx={1} className="cursor" onClick={goLogout}> 
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
