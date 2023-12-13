import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Slots: FC = () => {
  return (
    <div className="slots-area">
      <div className="slots-inside">
        <h3>0% Tax Time Slots</h3>
        <Container maxWidth={'xl'}>
          <Grid container>
            <Grid item md={4}>
              <div className="slot-item">
                <div className="tier">Tier 3</div>
                <img src="/images/bunny-yellow-slot.svg" alt=""/>
                <h5>100 BLOCKS</h5>
                <p>0% fees buy/sell</p>
                <div className="break"></div>
                <div className="price">
                  <img src="/images/eth-icon.svg" alt=""/>
                  0.1 ETH
                </div>
                <button className="black-btn">BUY TIME SLOT</button>
                <div className="left-slots">
                  50/50 slots left
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="slot-item">
                <div className="tier" style={{backgroundColor: "#5AC4EC"}}>Tier 2</div>
                <img src="/images/bunny-blue-slot.svg" alt=""/>
                <h5>200 BLOCKS</h5>
                <p>0% fees buy/sell</p>
                <div className="break"></div>
                <div className="price">
                  <img src="/images/eth-icon.svg" alt=""/>
                  0.175 ETH
                </div>
                <button className="black-btn">BUY TIME SLOT</button>
                <div className="left-slots">
                  30/30 slots left
                </div>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="slot-item">
                <div className="tier" style={{backgroundColor: "#DF5537"}}>Tier 1</div>
                <img src="/images/bunny-orange-slot.svg" alt=""/>
                <h5>300 BLOCKS</h5>
                <p>0% fees buy/sell</p>
                <div className="break"></div>
                <div className="price">
                  <img src="/images/eth-icon.svg" alt=""/>
                  0.25 ETH
                </div>
                <button className="black-btn">BUY TIME SLOT</button>
                <div className="left-slots">
                  20/20 slots left
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item md={12} className="slots-warning">
            <p>* This is an exclusive and limited for Early Adopters only. Please read the
              <a href="#" target="_blank"> Lightpaper </a>
              before buying the slot</p>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Slots;