import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import "./DeletarPostagem.css";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarPostagem() {
  let Navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPosts] = useState<Postagem>();
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
      Navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }
  function sim() {
    Navigate("/posts"); //blog pessoal
    deleteId(`/postagens/${id}`, {
      // back end
      headers: {
        Authorization: token,
      },
    });

    toast.success("Postagem deletada com sucesso!", {
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

  function nao() {
    Navigate("/posts");
  }

  return (
    <>
      <Box m={2}>
        <Card  className="fundo-deletar" variant="outlined">
          <CardContent>
            <Card className=" fundo-deletar">
              <Box justifyContent="center">
                <Typography className="letra" gutterBottom>Deseja deletar a Postagem:</Typography>
                <Typography>{post?.titulo}</Typography>
              </Box>
            </Card>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button  onClick={sim} className="sim" variant="contained" size="large">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} className="nao" variant="contained" size="large">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;

function setTema(
  arg0: string,
  setTema: any,
  arg2: { headers: { Authorization: string } }
) {
  throw new Error("Function not implemented.");
}
