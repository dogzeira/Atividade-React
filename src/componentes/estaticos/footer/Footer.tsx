import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@material-ui/core";

function Footer() {
  return (
    <>
      <Grid
        className="box"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                className="tamanho-f box2"
                variant="h6"
                align="center"
                gutterBottom
                >
                  Siga-nos nas redes sociais {" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://www.linkedin.com/in/doug-rocha/" target="_blank">
                  <LinkedInIcon className="box4" />
                </a>
              </Box>
            </Box>
            <Box className="box3">
              <Box paddingTop={1}>
                <Typography variant="subtitle2" align="center" className="box2">
                  © 2022 Copyright:
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" className="box2" align="center">
                  douglasdanilobutu13@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
  
  export default Footer;
                
