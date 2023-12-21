import React from 'react';
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
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BrowserView><TopBar/></BrowserView>
      <MobileView><TopBarMobile/></MobileView>
      <Banner/>
      <About/>
      <Slots/>
      <Lottery/>
      <Roadmap/>
      <BottomBlock/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
