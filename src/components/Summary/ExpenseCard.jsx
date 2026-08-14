import React from "react";
import { calculateExpenses } from "../../utils/transactionUtils";
import { transactions } from "../../data/transaction";
import "./ExpenseCard.css";

const ExpenseCard = () => {
  const expenses = calculateExpenses(transactions);
  return (
    <>
      <div className="expense-card">
        <h3>Expenses</h3>
        <p>₹{expenses}</p>
      </div>
    </>
  );
};

export default ExpenseCard;
