import React, {FC, useState} from "react";
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const contractAddress = Content.caValue;
const TopBar: FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('copy to clipboard error');
    }
  }

  return (
    <div className="top-bar">
      <Container maxWidth={'xl'}>
        <Grid container={true}>
          <Grid item md={5} className="buttons-area">
            <a href="/" className="black-btn">{Content.home}</a>
            <a href="#about" className="black-btn">{Content.about}</a>
            <a href="#tokenomics" className="black-btn">{Content.tokenomics}</a>
          </Grid>
          <Grid item md={3} className="logo-area">
            <a href="#" className="logo">
              <img src="/logo.png" alt="" height="100px"/>
            </a>
          </Grid>
          <Grid item md={4} className="contacts-area">
            <div className="contacts-links">
              <a href={Content.twitterLink} target="_blank"><img src="/images/twitter.svg" alt=""/></a>
              <a href={Content.telegramLink} target="_blank"><img src="/images/telegram.svg" alt=""/></a>
              <a href={Content.solscanLink} target="_blank"><img src="/solscan-logo.png" alt=""/></a>
              <a href={Content.dexScreenerLink} target="_blank"><img src="/DEX-SCREENER-logo.png" alt=""/></a>
            </div>
          </Grid>
          <Grid item md={12} className="contact-address">
            <div>Smart Contract</div>
            <div>
              {contractAddress.substring(0, 4)}...{contractAddress.substring(contractAddress.length - 4)}
              <span><img src="/images/copy.svg" alt="" onClick={() => copyToClipboard(contractAddress)}/></span>
              {copied && <section className="copied-message">Copied!</section>}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopBar;