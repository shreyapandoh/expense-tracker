import React from "react";
import TransactionItem from "./TransactionItem";
import { transactions } from "../../data/transaction";
import "./TransactionList.css";

const TransactionList = () => {
  return (
    <>
      <section className="transaction-list-section">
        {transactions.map((trans) => (
          <>
            <TransactionItem key={trans.id} trans={trans} />
          </>
        ))}
      </section>
    </>
  );
};

export default TransactionList;
