import React, {useEffect, useRef} from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import './styles/desktop.scss';
import './styles/mobile.scss';
import 'animate.css';
import TopBar from "./components/TopBar";
import TopBarMobile from "./components/TopBarMobile";
import Banner from "./components/Banner";
import About from "./components/About";
import Slots from "./components/Slots";
import Lottery from "./components/Lottery";
import Roadmap from "./components/Roadmap";
import BottomBlock from "./components/BottomBlock";
import Footer from "./components/Footer";
import {BrowserView, MobileView} from 'react-device-detect';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const ref = React.useRef<HTMLInputElement>(null);


  useEffect(() => {
    const hash = window.location.hash;
    if(hash === "#slots" && ref.current){
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth"
      })
    }
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <BrowserView><TopBar/></BrowserView>
      <MobileView><TopBarMobile/></MobileView>
      <Banner/>
      <About/>
      <div id="slots" ref={ref}>
        <Slots/>
      </div>
      <Lottery/>
      <Roadmap/>
      <BottomBlock/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
