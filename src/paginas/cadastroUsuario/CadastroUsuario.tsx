import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";

function CadastoUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login")
     
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Pirata cadastrado com sucesso!");
    } else {
      alert(
        "Algo de errado pirata, tente novamente!"
      );
    }
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={8}className="background2"></Grid>
      <Grid item xs={4} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="negrito2"
            >
              Cadastrar:
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
              id="confirmar senha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmar senha"
              margin="normal"
              type="password"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btcancelar">
                <p>Cancelar</p>
                </Button>
              </Link>
              <Button type="submit" variant="contained" className="btcadastrar">
                <p>Cadastar</p>
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastoUsuario;
