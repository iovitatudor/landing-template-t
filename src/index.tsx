import React from 'react';
import ReactDOM from 'react-dom/client';
import {wagmiConfig, chains} from "./wagmiConfig";
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {WagmiConfig} from "wagmi";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <App/>
    </RainbowKitProvider>
  </WagmiConfig>
);
