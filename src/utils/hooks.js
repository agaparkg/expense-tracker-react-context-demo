import { useEffect, useReducer } from "react";
import { actionTypes, reducerFn } from "../reducers/reducerFunction";

// redux = useContext + useReducer

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
); // null || [{}, {}]

let initialTransactions = localStorageTransactions || [];
// let initialTransactions =
//   localStorageTransactions !== null ? localStorageTransactions : [];

const updateLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

const initialState = {
  transactions: initialTransactions,
  count: 0,
  theme: "white",
};

export const useCustomHook = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState); // []

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: actionTypes.DELETE_TRANS,
      payload: {
        id,
      },
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: actionTypes.ADD_TRANS,
      payload: { transaction },
    });
  };

  useEffect(() => {
    updateLocalStorage(state.transactions);
  }, [state.transactions]);

  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  return value;
};
