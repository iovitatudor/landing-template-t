import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const Footer: FC = () => {
  return (
    <div className="footer-area">
      <Container maxWidth={'xl'}>
        <Grid container>
          <Grid item md={4} xs={6} className="logo">
            <a href="#"><img src="/logo.png" alt="" height="100px"/></a>
            <p>BLEK ILON MUSC © {(new Date().getFullYear())} All rights reserved</p>
          </Grid>
          <Grid item md={8} xs={6} className="links">
            <a href={Content.telegramLink} target="_blank" className="black-btn">Telegram</a>
            <a href={Content.twitterLink} target="_blank" className="black-btn">Twitter</a>
            {/*<a href={Content.raydiumLink} target="_blank" className="black-btn">Raydium</a>*/}
            <a href={Content.dexScreenerLink} target="_blank" className="black-btn">DexScreener</a>
            <a href={Content.solscanLink} target="_blank" className="black-btn">Solscan</a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;