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
    <div className="time-money how-to-play" id="how-to-play">
      <Container maxWidth={'xl'}>
        <BrowserView>
          <h2 id="heading-1" style={{fontSize: textSize}}>
            <span className="pink-color">How</span>
            <span className="white-color"> to</span><br/>
            <span className="red-color">Play</span>
          </h2>
        </BrowserView>
        <MobileView>
          <h2 id="heading-1" style={{fontSize: mobTextSize}}>
            <span className="pink-color">How</span>
            <span className="white-color"> to</span><br/>
            <span className="red-color">Play</span>
          </h2>
        </MobileView>
        <div>
          <Grid container={true}>
            <Grid item md={4} className="how-to-play-item">
              <img src="/images/how-to-play1.svg" alt=""/>
              <h3>SPIN&EARN</h3>
              <p>By spinning the wheel, inviting friends, buying slots, using boosts, expanding your clan through the
                referral program, and joining our socials, you earn carrots, our beloved bunnies! The more carrots you
                have, the more $TIME tokens you win!</p>
            </Grid>
            <Grid item md={4} className="how-to-play-item">
              <img src="/images/how-to-play2.svg" alt=""/>
              <h3>BATTLE&WIN</h3>
              <p>Now you can create your clan, formed of frens that came through your ref link and their frens, as well.
                Moreover, you can attack other clans and take their carrots. Find on the map the clan you want to attack
                and tell your team to spin the wheel!</p>
            </Grid>
            <Grid item md={4} className="how-to-play-item">
              <img src="/images/how-to-play3.svg" alt=""/>
              <h3>LOTTERY&JACKPOT</h3>
              <p>Aside from the in-game utility (players can use coins to acquire: boosts, defending/attacking powers,
                etc.), we redistribute 50% of all collected trading taxes back to players through lotteries (every 12h)
                and weekly jackpots!</p>
            </Grid>
            <Grid item md={12} xs={12} className="how-to-play-item"  style={{textAlign: "center", marginTop: "50px"}}>
                <a href="https://t.me/TimeLotteryBot" className="black-btn">Play now</a>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default HowToPlay;