import './App.css';
import Header from './compenents/Header.js';
import Balance from './compenents/Balance';
import IncomeExpenses from './compenents/IncomeExpenses';
import TransactionList from './compenents/TransactionList';
import AddTransaction from './compenents/AddTransaction';
import {GlobalProvider} from './contexts/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header appName="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses/> 
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
