import { useGlobalContext } from "../context/GlobalProvider";
import { getSignWithAmount } from "../utils/helpers";

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const customStyle = {
    color: total >= 0 ? "black" : "red",
  };

  return (
    <>
      <h4>Your Balance</h4>
      <h1 style={customStyle}>{getSignWithAmount(total)}</h1>
    </>
  );
};
