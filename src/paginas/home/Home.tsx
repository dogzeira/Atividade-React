import React, { useEffect } from "react";
import "./Home.css";
import { light } from "@material-ui/core/styles/createPalette";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

// tag de fragmento <>

function Home() {
  
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  
  useEffect(() => {
   
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  
  }, [token]);
  return (
    <>
      <Grid
        className="img-fundo"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button variant="outlined" className="button">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
