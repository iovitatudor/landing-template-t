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
            <span className="white-color">$BLM</span><br/>
          </h2>
        </BrowserView>
        <MobileView>
          <h2 id="heading-1" style={{fontSize: mobTextSize}}>
            <span className="white-color">About</span><br/>
            <span className="white-color">$BLM</span><br/>
          </h2>
        </MobileView>
        <div>
          <Grid container={true}>
            <Grid item md={4} className="how-to-play-item">
              <img src="/About-image-1.png" alt=""/>
              <h3>The Dogefather himself</h3>
              <p>But hold up, it ain’t just about tech and vibes here. We’re talkin’ bout the game-changer, the one and
                only $BLM token! 💸🔥 This ain’t just any crypto; it’s your VIP pass to Mars and back, baby. 💫 $BLM is
                powering up all of BlekMusc's wild projects, from space X-plorations 🌠 to turning your ride into an
                electric beast. 🐉</p>
            </Grid>
            <Grid item md={4} className="how-to-play-item">
              <img src="/About-image-2.png" alt=""/>
              <h3>We stan Meme Lord</h3>
              <p>And here’s the kicker: holding $BLM makes you part of the fam, getting you exclusive access to the
                latest tech, sickest rides, and a spot on the first spaceship outta here. 🛸✨
                So, if you're down to support the big-brain moves of our cool dude BlekMusc and wanna be part of the
                next big leap for mankind (and your wallet), you're in the right spot. 🎉👾</p>
            </Grid>
            <Grid item md={4} className="how-to-play-item">
              <img src="/About-image-3.png" alt=""/>
              <h3>The rocket-riding pioneer</h3>
              <p>So, if you're down to support the big-brain moves of our cool dude BlekMusc and wanna be part of the
                next big leap for mankind (and your wallet), you're in the right spot. 🎉👾 Let's ride this rocket
                together, fam! 💥🌕 Remember, we 🖤 BlekMusc and all the degen dreams he’s making reality. Join us, and
                let's make history with every $BLM token we snag. 🌌🤑 #ToMarsAndBeyond
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default HowToPlay;