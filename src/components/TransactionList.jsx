import React from "react";
import { Transaction } from "./Transaction.jsx";
import { useGlobalContext } from "../context/GlobalProvider.jsx";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
