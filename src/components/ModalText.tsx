import React from "react";

const ModalText = () => {
  return (
    <div className="modal-text">
      <p>Welcome to the TIME Presale. Before proceeding with your purchase, please carefully review and agree to the
        following terms:</p>
      <p><b>Time Presale</b></p>
      <p><b>Tiers:</b></p>
      <p>Tier 1, Duration 300 blocks, Slot Price 0.25ETH, Available Slots 20</p>
      <p>Tier 2, Duration 200 blocks, Slot Price 0.175ETH, Available Slots 30</p>
      <p>Tier 3, Duration 100 blocks, Slot Price 0.1ETH, Available Slots 50</p>
      <p>Users can purchase only one slot per verified wallet</p>
      <p>Participants get 0% commission fees on both buying and selling within the first 100, 200 or 300 trading blocks,
        depending on the purchased tier slot</p>
      <p><b>Transaction Limit:</b></p>
      <p>Each participant is allowed only one transaction. Multiple transactions, even from different wallets, are
        strictly prohibited. Such transactions will neither be recognized nor refunded. This policy is in place to
        ensure fairness and prevent misuse.
      </p>
      <p>There is a strict limit on the maximum amount of tokens per wallet, which is 1% (100,000,000 tokens) of Total
        Supply</p>
      <p><b>Verification Process:</b></p>
      <p>It is crucial to note that attempts to bypass the single transaction rule by using multiple wallets are
        strictly against the terms and conditions. Transactions resulting from such attempts will be considered
        non-refundable.
      </p>
      <p>Our team will conduct thorough post-sale investigations on every wallet address to eliminate any MEV bots or
        sniper bots
      </p>
      <p><b>Fairness and Prevention of Misuse:</b></p>
      <p>This policy is designed to maintain a fair and transparent presale process. We appreciate your cooperation and
        adherence to these guidelines, which are in place to prevent misuse and maintain the integrity of the TIME
        Presale.
      </p>
      <p><b>Non-Refundable Transactions:</b></p>
      <p>Transactions found in violation of the terms, including those attempting to circumvent the single transaction
        rule, are deemed non-refundable. Please ensure compliance to avoid any inconvenience.</p>
      <p><b>Understanding and Adherence:</b></p>
      <p>Your understanding and adherence to these terms are crucial for the success of the presale. We appreciate your
        cooperation in creating a positive and equitable experience for all participants.
      </p>
      <p>For additional details, please refer to the Lightpaper. By proceeding with the purchase, you acknowledge that
        you have read, understood, and agreed to abide by these terms and conditions. Thank you for your participation
        in the TIME Presale.
      </p>
    </div>
  );
}
export default ModalText;