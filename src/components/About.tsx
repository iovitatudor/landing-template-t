import React, {FC, useEffect, useState} from "react";
import {Container} from "@mui/material";
import {BrowserView, MobileView} from 'react-device-detect';
import {Content} from "../content";

const About: FC = () => {
  const [textSize, setTextSize] = useState(180);
  const [mobTextSize, setMobTextSize] = useState(20);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 100 && window.pageYOffset < 1700) {
            const size = (window.pageYOffset / 8) + 60;
            setTextSize(size);
          }

          if (window.pageYOffset > 2200 && window.pageYOffset < 3300) {
            setMobTextSize((window.pageYOffset / 40) + 40);
          }
        }
      );
    }
  }, []);

  return (
    <div className="time-money" id="tokenomics">
      <Container maxWidth={'xl'}>
        <BrowserView>
          <h2 id="heading-1" style={{fontSize: textSize}}>
            <span className="white-color">BLEK </span> <br/>
            <span className="white-color">ILON MUSC</span>
          </h2>
        </BrowserView>
        <MobileView>
          <h2 id="heading-1" style={{fontSize: mobTextSize}}>
          <span className="white-color">BLEK </span> <br/>
            <span className="white-color">ILON MUSC</span>
          </h2>
        </MobileView>

        <div className="details">
          <h3>{Content.totalSupply}</h3>
          <h4>1 000 000 000 $BLM</h4>
          <p>100% SAFE LAUNCH</p>
          <p>0% TAXES FOR BUY AND SELL</p>
          <p>CONTRACT RENOUNSED</p>
        </div>
      </Container>
    </div>
  );
}

export default About;