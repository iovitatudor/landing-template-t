import React, {FC, useEffect, useState} from "react";
import {Container, Grid} from "@mui/material";
import {BrowserView, MobileView} from 'react-device-detect';

const HowToPlay: FC = () => {
  const [textSize, setTextSize] = useState(150);
  const [mobTextSize, setMobTextSize] = useState(50);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 0 && window.pageYOffset < 1000) {
            const size = (window.pageYOffset / 20) + 120;
            setTextSize(size);
            setMobTextSize((window.pageYOffset / 20) + 50);
          }
        }
      );
    }
  }, []);

  return (
    <div className="time-money how-to-play" id="about">
      <Container maxWidth={'xl'}>
        <BrowserView>
          <h2 id="heading-1" style={{fontSize: textSize}}>
            <span className="white-color">About</span><br/>
            <span className="white-color">$blabla</span><br/>
          </h2>
        </BrowserView>
        <MobileView>
          <h2 id="heading-1" style={{fontSize: mobTextSize}}>
            <span className="white-color">About</span><br/>
            <span className="white-color">$blabla</span><br/>
          </h2>
        </MobileView>
        <div>
          <Grid container={true}>
            <Grid item md={3} className="how-to-play-item">
              <img src="/About-image-1.png" alt=""/>
              <h3>BLEK ILON MUSC ($BLM)</h3>
              <p>Elon Musc, the titan of Tesla and SpaceX, is the alpha of the tech universe. His mission? To launch
                rockets to Mars, electrify our roads, and meme the financial world like no other. Our vision? We see him
                black!!!</p>
            </Grid>
            <Grid item md={3} className="how-to-play-item">
              <img src="/About-image-2.png" alt=""/>
              <h3>The Dogefather himself</h3>
              <p>One of Musc's besties? The Dogefather himself, leading us to the moon one meme at a time. But watch out
                for his crypto enemies, the Bitcoin maximalists and SEC regulators, always lurking in the shadows.</p>
            </Grid>
            <Grid item md={3} className="how-to-play-item">
              <img src="/About-image-3.png" alt=""/>
              <h3>We stan Meme Lord</h3>
              <p>We're here to unite all Musketeers, from Dogecoin fanatics to Tesla investors, and support each other
                through the bull runs and bear markets. Musc is a visionary, a disruptor, and a meme lord
                extraordinaire. We stan Musc!</p>
            </Grid>
            <Grid item md={3} className="how-to-play-item">
              <img src="/4.png" alt=""/>
              <h3>The rocket-riding pioneer</h3>
              <p>Elon Musk, the rocket-riding pioneer of SpaceX and electric revolutionist at Tesla, stands as the
                commanding force in the realm of innovation. His grand purpose? To propel humanity to Mars, electrify
                our roads with sustainable energy, and disrupt industries with audacity unmatched.</p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default HowToPlay;