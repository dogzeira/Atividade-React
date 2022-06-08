import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
     dispatch(addToken(''));
    alert("Usuário deslogado");
    navigate("/login");
  }
  
  var navbarComponent;

  if(token != ""){
    navbarComponent = <AppBar position="static">
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
      <Link to="/home" className="cursor">
        <Box mx={1}>
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
        </Box>
      </Link>
      <Link to="/posts" className="cursor">
        <Box mx={1}>
          <Typography variant="h6" color="inherit">
            Postagens
          </Typography>
        </Box>
      </Link>
      <Link to="/temas" className="cursor">
        <Box mx={1}>
          <Typography variant="h6" color="inherit">
            Temas
          </Typography>
        </Box>
      </Link>
      <Link to="formularioTema" className="cursor">
        <Box mx={1}>
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
  }
  return (
    <>
     {navbarComponent}
    </>
  );
}

export default Navbar;
