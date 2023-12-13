import React from 'react';
import './styles/desktop.scss';
import 'animate.css';
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import TimeMoney from "./components/TimeMoney";
import Slots from "./components/Slots";
import Lottery from "./components/Lottery";
import Roadmap from "./components/Roadmap";
import BottomBlock from "./components/BottomBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Banner/>
      <TimeMoney/>
      <Slots/>
      <Lottery/>
      <Roadmap/>
      <BottomBlock/>
      <Footer/>
    </div>
  );
}

export default App;
