import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransactionsContext } from "./TransactionsContext";



import Header from "./components/Header";
import ProductRegister from "./pages/Products";
import Clients from "./pages/Clients";
import Suppliers from "./pages/Suppliers";
import Users from "./pages/Users";
import DashBoard from "./pages/DashBoard";
import Finances from "./pages/Finances";
import Login from "./pages/Login";

import Transactions from "./pages/Transactions";
import SideBar from "./components/SideBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState({});
 

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, [transaction]);

  return (
    <div>
     
      <TransactionsContext.Provider value={{transactions, setTransaction, transaction}}>
        <BrowserRouter>
          <Header />
          <div className="hidden sm:flex w-full flex-wrap md:flex-nowrap ">
            <SideBar />
            <div className="flex bg-grey-100 w-full flex-wrap md:flex-nowrap">
              <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/clients" component={Clients} />
                <Route path="/login" component={Login} />
                <Route path="/suppliers" component={Suppliers} />
                <Route path="/users" component={Users} />
                <Route path="/products" exact component={ProductRegister} />
                <Route path="/transactions" exact component={Transactions} />
                <Route path="/finances" exact component={Finances} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </TransactionsContext.Provider>
     
    </div>
  );
}

export default App;
