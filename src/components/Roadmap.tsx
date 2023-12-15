import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Roadmap: FC = () => {
  return (
    <div className="roadmap-area" id="roadmap">
      <div className="roadmap-area-inside">
        <Container maxWidth={'xl'}>
          <img className="title" src="/images/roadmap-title.svg" alt=""/>

          <Grid container className="roadmap-list">
            <Grid item md={6} xs={12}>
              <div className="roadmap-item">
                <div className="roadmap-img-part">
                  <img src="/images/timezone-1.png" alt=""/>
                </div>
                <div className="roadmap-list-part">
                  <h4>TIME zone 1</h4>
                  <ul>
                    <li>Dextools listing</li>
                    <li>777 + holders</li>
                    <li>$Time trending in Twitter</li>
                    <li>Dextools listing</li>
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
                    <li>TimeLottery mania</li>
                    <li>777 + holders</li>
                    <li>CEX Listings</li>
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
                    <li>Dextools listing</li>
                    <li>777 + holders</li>
                    <li>$Time trending in Twitter</li>
                    <li>Dextools listing</li>
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
                    <li>TimeLottery mania</li>
                    <li>777 + holders</li>
                    <li>CEX Listings</li>
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
                    <li>Dextools listing</li>
                    <li>777 + holders</li>
                    <li>$Time trending in Twitter</li>
                    <li>Dextools listing</li>
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