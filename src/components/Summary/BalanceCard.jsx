import React from "react";
import { calculateBalance } from "../../utils/transactionUtils";
import { transaction } from "../../data/transaction";
import "./BalanceCard.css";

const Balance = () => {
  const transactionBalance = calculateBalance(transaction);
  return (
    <>
      <div className="balance-content">
        <h1>Total Balance: </h1>
        <span>₹ {transactionBalance}</span>
      </div>
    </>
  );
};

export default Balance;
