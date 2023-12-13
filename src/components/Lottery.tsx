import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Lottery: FC = () => {
  return (
    <div className="lottery-area">
      <div className="lottery-area-inside">
        <Container maxWidth={"xl"} className="lottery-container">
          <img src="/images/lottery-image.svg" alt="" className="rotate-image"/>
          <div className="lottery-details">
            <div className="corner-points point-1"></div>
            <div className="corner-points point-2"></div>
            <div className="corner-points point-3"></div>
            <div className="corner-points point-4"></div>

            <h3>
              <img src="/images/pink-bell.png" alt=""/>
              <span className="blue-color">TAKE</span> <span className="white-color">YOUR</span> <span
              className="pink-color">TIME</span>
              <img src="/images/blue-bell.png" alt=""/>
            </h3>

            <Grid container className="block-list">
              <Grid item md={6}>
                <div className="red-block">
                  <h4>50% of Taxes</h4>
                  <p>goes to</p>
                  <h5>Rewards Pool</h5>
                </div>
              </Grid>
              <Grid item md={6}>
                <Grid item md={12}>
                  <div className="yellow-block">
                    <h4>12H</h4>
                    <h5>Daily Lottery</h5>
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="blue-block">
                    <h4>Weekly</h4>
                    <h5>Jackpot</h5>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <div className="lottery-warning">
              <img src="/images/fire-icon.svg" alt=""/>
              <p>25% of fees are burned! Up is the only way!</p>
              <img src="/images/fire-icon.svg" alt=""/>
            </div>
            <h4 className="bottom-heading animate__animated animate__infinite animate__zoomInUp"><span className="pink-color">time</span> <span
              className="blue-color">TOKENOMICS</span></h4>
            <Grid container>
              <Grid item md={4}>
                <div className="lottery-time-item animate__animated animate__infinite animate__flipInY">
                  <h6>10</h6>
                  <p>billion</p>
                </div>
              </Grid>
              <Grid item md={4}>
                <img className="lottery-time-image animate__animated animate__infinite animate__swing"
                     src="/images/bunny-blue-full-height.svg" alt=""/>
              </Grid>
              <Grid item md={4}>
                <div className="lottery-time-item animate__animated animate__infinite animate__flipInX">
                  <h6>90</h6>
                  <p>% Liquidity</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Lottery;