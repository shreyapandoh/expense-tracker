import React from "react";
import { calculateExpenses } from "../../utils/transactionUtils";
import { transaction } from "../../data/transaction";
import "./ExpenseCard.css";

const ExpenseCard = () => {
  const expenses = calculateExpenses(transaction);
  return (
    <>
      <div className="expense-card">
        <h3>Expenses</h3>
        <p>₹ {expenses}</p>
      </div>
    </>
  );
};

export default ExpenseCard;
