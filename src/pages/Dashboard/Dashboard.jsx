import React from "react";
import Summary from "../../components/Summary/Summary";
import "./Dashboard.css";
import TransactionList from "../../components/Transactions/TransactionList";

const Dashboard = () => {
  return (
    <>
      <Summary />
      <section>
        <div className="transaction-section">
          <h2>Recent Transactions</h2>
          <button>+ Add</button>
        </div>
        <div>
          <TransactionList />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
