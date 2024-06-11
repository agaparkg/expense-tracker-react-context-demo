export const actionTypes = {
  DELETE_TRANS: "DELETE_TRANSACTION",
  ADD_TRANS: "ADD_TRANSACTION",
};

// const initialState = {
//   transactions: initialTransactions,
//   count: 0,
//   theme: "white",
// };

export const reducerFn = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.DELETE_TRANS:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== payload.id;
        }),
      };
    case actionTypes.ADD_TRANS:
      return {
        ...state,
        transactions: [...state.transactions, payload.transaction],
      };
    default:
      return state;
  }
};
