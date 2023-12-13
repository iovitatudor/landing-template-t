import React, {FC, useState} from "react";
import {Container, Grid} from "@mui/material";

const contractAddress = '0x952cc1524BD8084731554744f812c3438687908a';
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
          <Grid item md={4} className="buttons-area">
            <a href="#" className="black-btn">About</a>
            <a href="#" className="black-btn">TimeLottery</a>
            <a href="#" className="black-btn">Roadmap</a>
          </Grid>
          <Grid item md={4} className="logo-area">
            <a href="#" className="logo">
              <img src="/images/logo.svg" alt=""/>
            </a>
          </Grid>
          <Grid item md={4} className="contacts-area">
            <span className="animate__animated animate__infinite animate__heartBeat">
              <img src="/images/like.svg" alt=""/>
            </span>
            <div className="contacts-links">
              <a href="#"><img src="/images/twitter.svg" alt=""/></a>
              <a href="#"><img src="/images/telegram.svg" alt=""/></a>
            </div>
          </Grid>
          <Grid item md={12} className="contact-address">
            <div>ERC20 Contract</div>
            <div>{contractAddress.substring(0, 4)}...{contractAddress.substring(contractAddress.length - 4)}
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