import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransactionsContext } from "./TransactionsContext";
import Header from "./components/Header";
import ProductRegister from "./pages/ProductRegister";
import ClientRegister from "./pages/ClientRegister";
import SupplierRegister from "./pages/SupplierRegister"
import DashBoard from "./pages/DashBoard";

import Transactions from "./pages/Transactions";
import SideBar from "./components/SideBar";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <TransactionsContext.Provider value={transactions}>
        <BrowserRouter>
          <Header />
          <div className="flex w-full flex-wrap md:flex-nowrap">
            <SideBar />
            <div className="flex bg-grey-100 w-full flex-wrap md:flex-nowrap">
              <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/clients" component={ClientRegister} />
                <Route path="/suppliers" component={SupplierRegister} />
                <Route path="/products" exact component={ProductRegister} />
                <Route path="/transactions" exact component={Transactions} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </TransactionsContext.Provider>
    </div>
  );
}

export default App;
