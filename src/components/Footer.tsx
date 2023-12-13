import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Footer: FC = () => {
  return (
    <div className="footer-area">
      <Container maxWidth={'xl'}>
        <Grid container>
          <Grid item md={4} className="logo">
            <a href="#"><img src="/images/logo.svg" alt=""/></a>
            <p>TIME © 2023 All rights reserved</p>
          </Grid>
          <Grid item md={8} className="links">
            <a href="#" className="black-btn">Lightpaper</a>
            <a href="#" className="black-btn">Etherscan</a>
            <a href="#" className="black-btn">Dextools</a>
            <a href="#" className="black-btn">Telegram</a>
            <a href="#" className="black-btn">Twitter</a>
            <a href="#" className="black-btn">E-mail</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;