import React, { useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

function DashBoard() {
  const transactions = useContext(TransactionsContext);

  const totalRevenue = transactions.reduce((acc, transaction) => {
    if (transaction.type === "Venda") {
      return acc + transaction.total_price;
    }
    return acc;
  }, 0);

  // const transactionsGraph = transactions.sort();

  const totalDepenses = transactions.reduce((acc, transaction) => {
    if (transaction.type === "Compra") {
      return acc + transaction.total_price;
    }
    return acc;
  }, 0);

  return (
    <div className="flex-column justify-center items-center m-auto bg-grey-100 h-screen w-full">
      <div className="w-full flex-wrap lg:flex-nowrap">
        <ResponsiveContainer width="90%" aspect={6 / 2}>
          <BarChart
            width={150}
            height={40}
            data={transactions.sort()}
            margin={{ top: 50, right: 10, bottom: 0, left: 100 }}
          >
            <CartesianGrid stroke="#e6e6e6" fill="#a09f9d48" />

            <Bar type="monotone" dataKey="total_price" fill="#B91C1C" />
            <XAxis dataKey="date" />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center items-center wrap-wrap w-4/5 m-auto w-full flex-wrap md:flex-nowrap ">
        <div className="flex-col justify-between items-center shadow-md w-full p-10 rounded m-10 ">
          <h3 className="text-3xl text-center text-gray-500 font-bold uppercase">
            Receitas
          </h3>
          <p className="text-3xl font-bold text-center text-green-500 ">
            {totalRevenue
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}
          </p>
        </div>
        <div className="flex-col justify-between items-center shadow-md w-full p-10 rounded m-10">
          <h3 className="text-3xl text-center text-gray-500 font-bold uppercase">
            Despesas
          </h3>
          <p className="text-3xl font-bold text-center text-red-700 ">
            {totalDepenses
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}
          </p>
        </div>
        <div className="flex-col justify-between items-center shadow-md w-full p-10 rounded m-10">
          <h3 className="text-3xl text-center text-gray-500 font-bold uppercase">
            Resultado
          </h3>
          <p className="text-3xl font-bold text-center text-gray-500 ">
            {(totalRevenue - totalDepenses)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
