import React, {FC, useEffect, useState} from "react";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount, useContractRead, useContractWrite} from "wagmi";
import ContractAbi from "../abi/TimeContractABI.json";
import {ethers} from "ethers";
import Preloader from "./Preloader";

interface ISlotItemProps {
  id: number,
  backgroundColor?: string,
  tierName: string,
  image: string,
  blocks: string,
  fees: string,
  price: string,
  slots: string,
  isBrought: boolean | unknown,
}

const contractAddress = '0x952cc1524BD8084731554744f812c3438687908a';

const SlotItem: FC<ISlotItemProps> = ({...props}) => {
  const [errorTransaction, setErrorTransaction] = useState(false);
  const [loading, setLoading] = useState(false);
  const {isConnected, address} = useAccount();

  const {data: slotsLeft} = useContractRead({
    abi: ContractAbi,
    address: contractAddress,
    functionName: 'availableSlots',
    args: [props.id],
    watch: true,
  });

  const {writeAsync: buySlot, data: buySlotResponse} = useContractWrite({
    address: contractAddress,
    abi: ContractAbi,
    functionName: "buySlot",
    args: [props.id],
  });

  useEffect(() => {
    setLoading(false);
  }, [slotsLeft]);

  useEffect(() => {
    if (errorTransaction === true) {
      setTimeout(() => setErrorTransaction(false), 3000);
    }
  }, [errorTransaction]);

  const handleBuySlot = async () => {
    try {

      const transactionResponse = await buySlot({
        // @ts-ignore
        value: ethers.utils.parseEther(props.price),
      });
      setLoading(true);
      console.log(transactionResponse);
    } catch (error) {
      setErrorTransaction(true);
    }
  }

  return (
    <div className="slot-item">
      {
        loading && <Preloader/>
      }

      {
        (slotsLeft?.toString() === "0") &&
          <div className="soldOut"><p>sold out</p></div>
      }
      <div className="tier animate__animated animate__infinite animate__tada"
           style={{backgroundColor: props.backgroundColor}}>
        {props.tierName}
      </div>
      <img src={props.image} alt=""/>
      <h5>{props.blocks} BLOCKS</h5>
      <p>{props.fees} fees buy/sell</p>
      <div className="break"></div>
      <div className="price">
        <img src="/images/eth-icon.svg" alt=""/>
        {props.price} ETH
      </div>
      {
        !props.isBrought ?
          <>
            {
              !isConnected ?
                <ConnectButton/> :
                <button className="black-btn" onClick={handleBuySlot}>BUY TIME SLOT</button>
            }
          </>
          :
          <div className="slot-brought-message">Hooray! You own a slot!</div>
      }

      {
        errorTransaction &&
          <p style={{color: '#eb2f06', marginBottom: '20px'}}>
              <small>Insufficient funds or rejected by Your wallet</small>
          </p>
      }
      <div className="left-slots">
        {slotsLeft?.toString()}/{props.slots} slots left
      </div>
    </div>
  );
}

export default SlotItem;