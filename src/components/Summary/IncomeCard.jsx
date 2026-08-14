import React from "react";
import { calculateEarnings } from "../../utils/transactionUtils";
import { transactions } from "../../data/transaction";
import "./IncomeCard.css";

const IncomeCard = () => {
  const earnings = calculateEarnings(transactions);
  return (
    <>
      <div className="income-card">
        <h3>Income</h3>
        <p>₹{earnings}</p>
      </div>
    </>
  );
};

export default IncomeCard;
