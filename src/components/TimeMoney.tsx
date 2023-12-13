import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const TimeMoney: FC = () => {
  return (
    <div className="time-money">
      <Container maxWidth={'xl'}>
        <h2>
          <span className="pink-color">$TIME</span>
          <span className="white-color"> is</span> <br/>
          <span className="blue-color">money</span>
        </h2>
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
              <img src="/images/map.gif" alt="" width="100%"/>
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
              <img src="/images/save-your-spot.svg" alt="" width="100%"/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default TimeMoney;