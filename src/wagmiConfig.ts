import {configureChains, createConfig} from "wagmi";
import {goerli, mainnet} from "wagmi/chains";
import {alchemyProvider} from "wagmi/providers/alchemy";
import {publicProvider} from "wagmi/providers/public";
import {connectorsForWallets} from "@rainbow-me/rainbowkit";
import {
    coinbaseWallet,
    metaMaskWallet,
    walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";


const {chains, publicClient} = configureChains(
    [mainnet],
    [
        // @ts-ignore
        alchemyProvider({apiKey: process.env.REACT_APP_ALCHEMY_API_KEY}),
        publicProvider()
    ]
);

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            metaMaskWallet({projectId: process.env.REACT_APP_PROJECT_ID, chains}),
            coinbaseWallet({appName: 'KOLs', chains}),
            // @ts-ignore
            walletConnectWallet({projectId: process.env.REACT_APP_PROJECT_ID, chains}),
        ],
    },
]);

export const wagmiConfig = createConfig({
    autoConnect: false,
    connectors,
    publicClient,
})
export {chains};