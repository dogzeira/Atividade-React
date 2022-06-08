import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function DeletarPostagem() {
  let Navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPosts] = useState<Postagem>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
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
    Navigate("/posts");//blog pessoal
    deleteId(`/postagens/${id}`, {// back end
      headers: {
        Authorization: token,
      },
    });
    alert("Postagem deletada com sucesso");
  }

  function nao() {
    Navigate("/posts");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
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

function setTema(arg0: string, setTema: any, arg2: { headers: { Authorization: string; }; }) {
  throw new Error('Function not implemented.');
}
