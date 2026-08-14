import React, { useState } from "react";
import "./TransactionItem.css";

const TransactionItem = () => {
  const [sign, setSign] = useState("+");
  return (
    <>
      <div className="transaction-item-section">
        <h3 className="transaction-category">Salary</h3>
        <div className="transaction-actions">
          <p
            className={
              sign === "+"
                ? "transaction-amount gain"
                : "transaction-amount loss"
            }
          >
            {sign} 1800000
          </p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TransactionItem;
