import React, { useEffect } from "react";
import "./Home.css";
import { light } from "@material-ui/core/styles/createPalette";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// tag de fragmento <>

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Pirata, é necessario estar logado", {
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
        <Grid alignItems="flex-end" item xs={6}>
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
              variant="h6"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões sobre esse anime
              magnífico!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link className="text-decoration" to="/posts">
              <Button variant="outlined" className="button">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        {/* importante */}
        <Grid item xs={12}>
          <Box padding={10}></Box>
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
