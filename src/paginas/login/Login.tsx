import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { login } from "../../services/Service";
import "./Login.css";
import UserLogin from "../../models/UseLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      toast.success("Pirata logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch {
      toast.error("Algo de errado pirata, tente novamente!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  return (
    <Grid
      className="background"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" xs={4}>
        <Box className="fundo-login" paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="negrito"
            >
              Entrar:
            </Typography>
            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              value={userLogin.usuario}
              label="E-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            >
              {" "}
            </TextField>
            <TextField
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              value={userLogin.senha}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            >
              {" "}
            </TextField>
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="cor-button">
                <p>Pirata logando</p>
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link
              className="text-decorator-none cor-button2"
              to="/cadastrousuario"
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="negrito"
              >
                cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
