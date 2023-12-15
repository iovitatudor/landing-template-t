import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
  return (
    <div className="banner-area">
      <Container maxWidth={"xl"}>
        <Grid container={true}>
          <Grid item md={6}>
            <h1>
              <span className="red-color">TIME</span> <span className="white-color">TOKEN</span><span
              className="blue-color">.</span>
            </h1>
            <p>$TIME - a memecoin that empowers you to take charge of your Time and Money. Change the game and take
              control over your Time!</p>

            <div className="banner-btns">
              <button className="btn-main red-btn">Get $TIME</button>
              <a href="#" className="btn-main blue-btn">Dextools</a>
            </div>
          </Grid>
          <Grid item md={6} className="animated-area">
            <img src="/images/bunny-blue.svg" alt="" className="banner-image"/>
            {/*<div className="lottery animate__animated animate__infinite animate__pulse">*/}
            {/*  <a href="https://lottery.time.cheap" target="_blank"></a>*/}
            {/*  /!*JOIN LOTTERY*!/*/}
            {/*</div>*/}
            <img src="/images/cat.svg" alt="" className="animated-item animate__animated animate__infinite animate__heartBeat cat-img" style={{left: "0px", top: "25%"}}/>
            <img src="/images/dog.svg" alt="" className="animated-item animate__animated animate__infinite animate__swing dog-img" style={{right: "0px", top: "30%"}}/>
            <img src="/images/frog.svg" alt="" className="animated-item animate__animated animate__infinite animate__tada frog-img" style={{right: "5%", top: "55%"}}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;