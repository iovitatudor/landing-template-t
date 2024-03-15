import React, {FC} from "react";
import {Container, Grid} from "@mui/material";

const Banner: FC = () => {
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
            <p>Elon Musc, the titan of Tesla and SpaceX, is the alpha of the tech universe. His mission? To launch
              rockets to Mars, electrify our roads, and meme the financial world like no other. Our vision? We see him
              black!!!</p>
          </Grid>
          <Grid item md={6} className="animated-area">
            <video src="/Main-Gif.mp4" autoPlay={true} muted={true} width="100%" loop={true}
                   style={{borderRadius: "8px"}}></video>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;