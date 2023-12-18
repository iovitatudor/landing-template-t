import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Roadmap: FC = () => {
  return (
    <div className="roadmap-area" id="roadmap">
      <div className="roadmap-area-inside">
        <Container maxWidth={'xl'}>
          <img className="title" src="/images/roadmap-title.png" alt=""/>

          <Grid container className="roadmap-list">
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part">
                  <img src="/images/timezone-1.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>Time Zone 1</h4>
                  <ul>
                    <li>Community and KOLs Engagement Presale</li>
                    <li>Time.cheap paid for 10 years</li>
                    <li>$TIME Uniswap listing</li>
                    <li>DEXTOOLS listing</li>
                    <li>The first 300 trading blocks</li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-arrow right">
                <img src="/images/arrow-1.png" alt="" className="animate__animated animate__infinite animate__shakeY"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-arrow left">
                <img src="/images/arrow-2.png" alt="" className="animate__animated animate__infinite animate__shakeY"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part ">
                  <img src="/images/timezone-2.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>TIME zone 2</h4>
                  <ul>
                    <li>1000+ holders</li>
                    <li>Lotteries and Jackpot start</li>
                    <li>CMC/CG listings</li>
                    <li>$TIME Twitter trending</li>
                    <li>$10M+ daily trading</li>
                    <li>10% Total Supply Burned</li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part">
                  <img src="/images/timezone-3.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>TIME zone 3</h4>
                  <ul>
                    <li>10000+ holders</li>
                    <li>Global marketing campaign</li>
                    <li>Celebrity Influencers push</li>
                    <li>$50M+ daily trading</li>
                    <li>25% Total Supply burned</li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-arrow right">
                <img src="/images/arrow-3.png" alt="" className="animate__animated animate__infinite animate__shakeY"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-arrow left">
                <img src="/images/arrow-4.png" alt="" className="animate__animated animate__infinite animate__shakeY"/>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part ">
                  <img src="/images/timezone-4.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>TIME zone 4</h4>
                  <ul>
                    <li>25000+ holders</li>
                    <li>Next-Gen Partnerships</li>
                    <li>Small CEX listing</li>
                    <li>$100M+ daily trading</li>
                    <li>50% Total Supply burned</li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part">
                  <img src="/images/timezone-5.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>TIME zone 5</h4>
                  <ul>
                    <li>50000+ holders</li>
                    <li>Grand CEX listing</li>
                    <li>TimeMachine</li>
                    <li>$500M+ daily trading</li>
                    <li>90% Total Supply burned</li>
                  </ul>
                </div>
              </div>
            </Grid>

          </Grid>
        </Container>

      </div>
    </div>
  );
}

export default Roadmap;