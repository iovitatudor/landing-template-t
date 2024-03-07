import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
  return (
    <div className="banner-area">
      <Container maxWidth={"xl"}>
        <Grid container={true}>
          <Grid item md={6}>
            <h1>
              <span className="red-color">TIME</span> <br/>
              <span className="blue-color">SPIN</span>
              <span className="white-color">&</span>
              <span className="blue-color">WIN</span>
            </h1>
            <p>First P2E strategy game built on Telegram Mini-App technology. Enter the Mini-App, spin the fortune
              wheel, create/join a clan, farm carrots, and attack other clans to earn even more carrots and tokens!</p>

            <div className="banner-btns">
              {/*<button className="btn-main red-btn">Get $TIME</button>*/}
              {/*<a href="#" className="btn-main blue-btn">Dextools</a>*/}
              <a href="https://t.me/TimeLotteryBot" className="btn-main red-btn">Play now</a>
            </div>
          </Grid>
          <Grid item md={6} className="animated-area">
            <video src="/Motion-video-MiniApp-en.mp4" autoPlay={true} muted={true} width="100%" loop={true} style={{borderRadius: "8px"}}></video>
            {/*<img src="/images/bunny-blue.svg" alt="" className="banner-image"/>*/}
            {/*/!*<div className="lottery animate__animated animate__infinite animate__pulse">*!/*/}
            {/*/!*  <a href="https://lottery.time.cheap" target="_blank"></a>*!/*/}
            {/*/!*  /!*JOIN LOTTERY*!/*!/*/}
            {/*/!*</div>*!/*/}
            {/*<img src="/images/cat.svg" alt="" className="animated-item animate__animated animate__infinite animate__heartBeat cat-img" style={{left: "0px", top: "25%"}}/>*/}
            {/*<img src="/images/dog.svg" alt="" className="animated-item animate__animated animate__infinite animate__swing dog-img" style={{right: "0px", top: "30%"}}/>*/}
            {/*<img src="/images/frog.svg" alt="" className="animated-item animate__animated animate__infinite animate__tada frog-img" style={{right: "5%", top: "55%"}}/>*/}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;