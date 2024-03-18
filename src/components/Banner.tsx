import React, {FC, useState} from "react";
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
  const [str, setStr] = useState("{first}");
  return (
    <div className="banner-area">
      <Container maxWidth={"xl"}>
        <Grid container={true}>
          <Grid item md={6}>
            <h1>
              <span className="white-color">BLEK</span>
              <span className="white-color"> ILON</span> <br/>
              <span className="white-color">MUSC</span>
              <span className="white-color"> ($BLM)</span>
            </h1>
            <p>Yo yo yo {str}! 🚀 Welcome to the ultimate space where BlekMusc, da real tech wizard, is livin' large!
              🧙‍♂️🌌 This genius is all about marsifying Earth 🌍➡️🔴 and slapping solar panels on everything that moves
              (and doesn't!). 🌞💡 With his BFF Starz, he's got rockets blasting 🚀 and e-cars zooming 🏎️💨 like there's no
              tomorrow.</p>
          </Grid>
          <Grid item md={6} className="animated-area" style={{margin: "20px auto"}}>
            <video src="/Main-Gif.mp4" autoPlay={true} muted={true} width="100%" loop={true}
                   style={{borderRadius: "8px"}}></video>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;