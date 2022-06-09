import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function CadastroTema() {
  let Navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

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
      Navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }
  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // Se o ID for diferente de indefinido tente Atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        toast.success("Tema atualizado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
        
        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        
        toast.error("Pirata, verifique a quantidade minima de caracteres", {
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

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/temas`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });

        toast.success("Tema cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    }

    back();
  }

  function back() {
    Navigate("/temas");
  }
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;

function findById(id: string) {
  throw new Error("Function not implemented.");
}
