import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses.jsx";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransaction.jsx";
import GlobalProvider from "./context/GlobalProvider.jsx";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
