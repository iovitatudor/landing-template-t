import React, {FC, useState} from "react";
import {Container, Grid} from "@mui/material";
import {Content} from "../content";

const contractAddress = Content.caValue;
const TopBarMobile: FC = () => {
  const [copied, setCopied] = useState(false);
  const [burgherClass, setBurgherClass] = useState('');
  const [drawerClass, setDrawerClass] = useState('');
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('copy to clipboard error');
    }
  }

  const handleBurgher = () => {
    if (burgherClass === 'open') {
      setBurgherClass('');
      setDrawerClass('');
    } else {
      setBurgherClass('open');
      setDrawerClass('open-drawer');
    }
  }

  const disableDrawer = () => {
    setBurgherClass('');
    setDrawerClass('');
  }

  return (
    <div className="top-bar">
      <Container maxWidth={'xl'}>
        <Grid container={true}>
          <Grid item md={4} xs={6} className="logo-area">
            <a href="#" className="logo">
              <img src="/logo.png" height="50px" style={{marginTop: "30px"}}/>
            </a>
          </Grid>
          <Grid item md={4} xs={6} className="burgher-area">
            <div id="nav-icon3" onClick={handleBurgher} className={burgherClass}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={"drawer " + drawerClass}>
              <a href="/" className="black-btn">{Content.home}</a>
              <a href="#about" className="black-btn">{Content.about}</a>
              <a href="#tokenomics" className="black-btn">{Content.tokenomics}</a>
            </div>
          </Grid>
          <Grid item md={12} xs={6} className="contact-address">
            <div>ERC20 Contract</div>
            <div>
              {contractAddress.substring(0, 4)}...{contractAddress.substring(contractAddress.length - 4)}
              {/*coming soon...*/}
              <span><img src="/images/copy.svg" alt="" onClick={() => copyToClipboard(contractAddress)}/></span>
              {copied && <section className="copied-message">Copied!</section>}
            </div>
          </Grid>
          <Grid item md={4} xs={6} className="contacts-area">
            {/*<span className="animate__animated animate__infinite animate__heartBeat">*/}
            {/*  <img src="/images/like.svg" alt=""/>*/}
            {/*</span>*/}
            <div className="contacts-links">
              <a href={Content.twitterLink} target="_blank"><img src="/images/twitter.svg" alt=""/></a>
              <a href={Content.telegramLink} target="_blank"><img src="/images/telegram.svg" alt=""/></a>
              <a href={Content.solscanLink} target="_blank"><img src="/solscan-logo.png" alt=""/></a>
              <a href={Content.dexScreenerLink} target="_blank"><img src="/DEX-SCREENER-logo.png" alt=""/></a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopBarMobile;