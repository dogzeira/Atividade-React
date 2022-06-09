import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Pirata deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#040303" }} variant="dense">
          <Link to="/home" className="cursor">
            <Box>
              <img
                src="https://i.imgur.com/ajeO6Na.png"
                alt="logo"
                height={80}
                width={200}
              />
            </Box>
          </Link>

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
            <Box className="cursor">
            <Box marginLeft={75} className="logout" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                 Logout
              </Typography>
            </Box>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
