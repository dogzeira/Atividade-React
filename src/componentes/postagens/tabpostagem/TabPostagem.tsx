import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs
            className="fundo"
            centered
            indicatorColor="secondary"
            onChange={handleChange}
          >
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel className="fundo" value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            One Piece segue a história de um grupo de piratas liderado por
            Monkey D. Luffy. O garoto, que possui um corpo elástico, pretende se
            tornar o Rei dos Piratas e para isso deve encontrar o One Piece,
            tesouro misterioso capaz de torná-lo imbatível, segundo as lendas.
            <br />
            <br />
            Os Piratas do Chapéu de Palha, como é conhecido o grupo, acabam
            vivendo momentos extremamente memoráveis. One Piece consegue unir
            bem temas como família, perda e perseguição de sonhos, resultando em
            uma obra mundialmente aclamada.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
