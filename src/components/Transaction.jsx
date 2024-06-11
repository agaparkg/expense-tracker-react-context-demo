import React from "react";
import { getSignWithAmount } from "../utils/helpers";
import { useGlobalContext } from "../context/GlobalProvider";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();

  const customClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={customClass}>
      {transaction.text} <span>{getSignWithAmount(transaction.amount)}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
