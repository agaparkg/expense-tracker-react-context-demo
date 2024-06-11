import { useEffect, useState } from "react";

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
); // null

let initialTransactions = localStorageTransactions || [];
// let initialTransactions =
//   localStorageTransactions !== null ? localStorageTransactions : [];

const updateLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

export const useCustomHook = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  // Actions
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    setTransactions((prevTrans) => {
      return [...prevTrans, transaction];
    });
  };

  useEffect(() => {
    updateLocalStorage(transactions);
  }, [transactions]);

  const value = {
    transactions,
    deleteTransaction,
    addTransaction,
  };

  return value;
};
