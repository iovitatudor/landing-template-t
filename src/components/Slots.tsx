import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import SlotItem from "./SlotItem";
import {useAccount, useContractRead} from "wagmi";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import ContractAbi from "../abi/TimeContractABI.json";

const contractAddress = '0x952cc1524BD8084731554744f812c3438687908a';

const Slots: FC = () => {
  const {isConnected, address} = useAccount();

  const {data: isBrought} = useContractRead({
    abi: ContractAbi,
    address: contractAddress,
    functionName: 'vipAddresses',
    args: [address],
    watch: true,
  });

  return (
    <div className="slots-area">
      <div className="slots-inside">
        <h3>0% Tax Time Slots</h3>
        <Container maxWidth={'xl'}>
          <Grid container>
            <Grid item md={4} xs={12}>
              <SlotItem id={2} tierName="Tier 3" image="/images/bunny-yellow-slot.svg" blocks="100" fees="0%"
                        price="0.1" slots="50" isBrought={isBrought}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <SlotItem id={1} tierName="Tier 2" backgroundColor="#5AC4EC" image="/images/bunny-blue-slot.svg"
                        blocks="200" fees="0%" price="0.175" slots="30" isBrought={isBrought}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <SlotItem id={0} tierName="Tier 1" backgroundColor="#DF5537" image="/images/bunny-orange-slot.svg"
                        blocks="300" fees="0%" price="0.25" slots="20" isBrought={isBrought}/>
            </Grid>
          </Grid>
          <Grid item md={12} className="slots-warning">
            <p>* This is an exclusive and limited for Early Adopters only. Please read the <a
              href="https://drive.proton.me/urls/GP3HQY1CY4#IPtkoYAlxLYT" target="_blank">Lightpaper</a> before buying
              the slot</p>
            {
              isConnected &&
                <div className="connect-btn-wrapper">
                    <ConnectButton/>
                </div>
            }
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Slots;