import React from "react";
import "./Summary.css";
import Balance from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";

const Summary = () => {
  return (
    <>
      <div className="summary-content">
        <Balance />
      </div>
      <div className="cards-content">
        <IncomeCard />
        <ExpenseCard />
      </div>
    </>
  );
};

export default Summary;
