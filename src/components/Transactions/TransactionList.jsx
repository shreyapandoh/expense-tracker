import React from "react";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";

const TransactionList = () => {
  return (
    <>
      <section className="transaction-list-section">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </section>
    </>
  );
};

export default TransactionList;
