import React from "react";
import "./TransactionItem.css";

const TransactionItem = ({ trans }) => {
  const sign = trans.type === "earnings" ? "+" : "-";
  return (
    <>
      <div className="transaction-item-section">
        <h3 className="transaction-category">{trans.title}</h3>
        <div className="transaction-actions">
          <p
            className={
              sign === "+"
                ? "transaction-amount gain"
                : "transaction-amount loss"
            }
          >
            {sign} ₹{trans.amount}
          </p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TransactionItem;
