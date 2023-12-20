import React, {FC, useEffect, useState} from "react";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {useAccount, useContractRead, useContractWrite} from "wagmi";
import ContractAbi from "../abi/TimeContractABI.json";
import {ethers} from "ethers";
import Preloader from "./Preloader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalText from "./ModalText";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface ISlotItemProps {
  id: number,
  backgroundColor?: string,
  tierName: string,
  image: string,
  blocks: string,
  fees: string,
  price: string,
  slots: string,
}

const contractAddress = '0x8227462E8146225aD0EAF1A9fB39Fe629e65D4d3';

const SlotItem: FC<ISlotItemProps> = ({...props}) => {
  const [errorTransaction, setErrorTransaction] = useState(false);
  const [loading, setLoading] = useState(false);
  const {isConnected, address} = useAccount();
  const [open, setOpen] = React.useState(false);
  const [accept, setAccept] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {data: slotsLeft} = useContractRead({
    abi: ContractAbi,
    address: contractAddress,
    functionName: 'availableSlots',
    args: [props.id],
    watch: true,
  });

  const {data: isBrought} = useContractRead({
    abi: ContractAbi,
    address: contractAddress,
    functionName: 'hasPurchased',
    args: [address, props.id],
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
    setMessage('');
    try {
      if (!accept) {
        setMessage("Please indicate that you accept the Terms and Conditions");
        return;
      }
      const transactionResponse = await buySlot({
        // @ts-ignore
        value: ethers.utils.parseEther(props.price),
      });
      setLoading(true);
      setOpen(false);
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
      <div className="break" style={{backgroundColor: props.backgroundColor}}></div>
      <div className="price">
        <img src="/images/eth-icon.svg" alt=""/>
        {props.price} ETH
      </div>
      {
        !isBrought ?
          <>
            {
              !isConnected ?
                <ConnectButton/> :
                <button className="black-btn" onClick={handleOpen}>BUY TIME SLOT</button>
            }
          </>
          :
          <div className="slot-brought-message">Hooray! You own a slot!</div>
      }

      <div className="left-slots">
        {slotsLeft?.toString()}/{props.slots} slots left
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-inside">
          <ModalClose variant="plain" sx={{m: 1}}/>
          <h2>
            Terms & Conditions for Presale
          </h2>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            <ModalText/>
            <div className="checkbox-input">
              <FormControlLabel required control={<Checkbox/>} checked={accept}
                                onChange={() => {
                                  setAccept(!accept)
                                }} label="I have read and accepted Terms and Conditions"/>
            </div>
            <button className="black-btn" onClick={handleBuySlot}>BUY TIME SLOT</button>
            {
              errorTransaction &&
                <p style={{color: '#eb2f06', marginBottom: '20px'}}>
                    <small>Insufficient funds or rejected by Your wallet</small>
                </p>
            }

            {
              message  &&
                <p style={{color: '#eb2f06', marginBottom: '20px'}}>
                    <small>{message}</small>
                </p>
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default SlotItem;