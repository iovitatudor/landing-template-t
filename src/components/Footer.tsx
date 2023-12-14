import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Footer: FC = () => {
  return (
    <div className="footer-area">
      <Container maxWidth={'xl'}>
        <Grid container>
          <Grid item md={4} xs={6} className="logo">
            <a href="#"><img src="/images/logo.svg" alt=""/></a>
            <p>TIME © {(new Date().getFullYear())} All rights reserved</p>
          </Grid>
          <Grid item md={8} xs={6} className="links">
            <a href="https://drive.proton.me/urls/GP3HQY1CY4#IPtkoYAlxLYT" target="_blank" className="black-btn">Lightpaper</a>
            <a href="#" className="black-btn">Etherscan</a>
            <a href="#" className="black-btn">Dextools</a>
            <a href="#" className="black-btn">Telegram</a>
            <a href="https://twitter.com/TimeMemecoin" target="_blank" className="black-btn">Twitter</a>
            <a href="https://t.me/TIME_loundge" target="_blank" className="black-btn">E-mail</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;