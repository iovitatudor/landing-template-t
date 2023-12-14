import React, {FC, useEffect, useState} from "react";
import {Container, Grid} from "@mui/material";
import {BrowserView, MobileView} from 'react-device-detect';

const About: FC = () => {
  const [textSize, setTextSize] = useState(180);
  const [mobTextSize, setMobTextSize] = useState(50);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 100 && window.pageYOffset < 1200) {
            const size = (window.pageYOffset / 8) + 160;
            setTextSize(size);
            setMobTextSize((window.pageYOffset / 20) + 50);
          }
        }
      );
    }
  }, []);

  return (
    <div className="time-money" id="about">
      <Container maxWidth={'xl'}>
        <BrowserView>
          <h2 id="heading-1" style={{fontSize: textSize}}>
            <span className="pink-color">$TIME</span>
            <span className="white-color"> is</span>
            <span className="blue-color">money</span>
          </h2>
        </BrowserView>
        <MobileView>
          <h2 id="heading-1" style={{fontSize: mobTextSize}}>
            <span className="pink-color">$TIME</span>
            <span className="white-color"> is</span>
            <span className="blue-color">money</span>
          </h2>
        </MobileView>

        <div className="details">
          <img src="/images/bunny-details.svg" alt=""/>
          <h3>ABOUT $TIME</h3>
          <h4>You can now literally buy your Time</h4>
          <p>Unique token, no token presales, 90% goes to liquidity, exclusive whitelist technology, 50% of tax
            redistributed to holders, 25% burned, time lottery (every 12 hours), jackpot (every week)</p>
        </div>
        <div>
          <Grid container={true}>
            <Grid item md={12}>
              <img src="/images/2.gif" alt="" width="120%" style={{marginLeft: "-10%"}}/>
            </Grid>
            <Grid item md={6}>
              <div className="details-item yellow-bg">
                <img src="/images/yellow-icon.svg" alt=""/>
                <p>Securing a slot offers significant benefits, including zero fees on both buying and selling within
                  the first 300 trading blocks, thereby ensuring a substantial advantage over the rest of the
                  market.</p>
              </div>
              <div className="details-item blue-bg">
                <img src="/images/blue-icon.svg" alt=""/>
                <p>The presale round operates on a first-come, first-served basis, ensuring that once all the slots are
                  sold, the sale concludes. <b>Don't waste Your Time!</b></p>
              </div>
            </Grid>
            <Grid item md={6}>
              <img src="/images/save-your-spot.svg" alt="" width="100%"
                   className="animate__animated animate__infinite animate__tada"/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default About;