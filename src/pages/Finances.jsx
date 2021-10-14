import React, { useState, useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
import FinanceLine from "../components/FinanceLine";
// import TransactionsAdd from "../components/TransactionAdd";

import { NewTransactionModal } from "../components/NewTransactionModal";

function Finances() {
  const transactions = useContext(TransactionsContext);
  const [modalTransactionIsOpen, setModalTransactionIsOpen] = useState(false);
  const [start_date, setStart_date] = useState(new Date)
  const [end_date, setEnd_date] = useState(new Date)

  function openModal() {
    setModalTransactionIsOpen(true);
  }

  function closeModal() {
    setModalTransactionIsOpen(false);
  }

  return (
    <div>
      <div className="m-20">
        {/* <select
          className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
          id="options-select"
          placeholder="description"
          // onClick={(e) => getProducts(e)}
          // onChange={(e) => setClient(e.target.value)}
        >
          <option value="" className="flex flex-col mb-4">
            -- Filtrar por mês --
          </option>

          <option value="jan">Janeiro</option>
          <option value="fev">Fevereiro</option>
          <option value="mar">Março</option>
          <option value="abr">Abril</option>
          <option value="mai">Maio</option>
          <option value="jun">Junho</option>
          <option value="jul">Julho</option>
          <option value="ago">Agosto</option>
          <option value="set">Setembro</option>
          <option value="out">Outubro</option>
          <option value="nov">Novembro</option>
          <option value="dez">Dezembro</option>
        </select> */}

        <div>
          <p className="font-extrabold">
            Selecione o período:   <input type="date" value="start_date" onChange={(e) => {
              setStart_date(new Date(e.target.value))}} className="ml-20" />{console.log(start_date)} 
            <input type="date" value="end_date" onChange={(e) => {
              setEnd_date(new Date(e.target.value))}} className="ml-20" />{console.log(`enddate:${end_date}`)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-xl mt-20 font-base">Financeiro</h1>
       
        </div>
        <table className="table-fixed border w-full ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12  border bg-gray-100 font-medium">Data</th>
              <th className="w-1/12  border bg-gray-100 font-medium">Tipo</th>

              <th className="w-3/12  border bg-gray-100 font-medium">Cliente</th>

              <th className="w-3/12 border bg-gray-100 font-medium">Valor Total</th>
            </tr>
          </thead>
        </table>
             
        {transactions.filter(transaction =>  transaction.date === (start_date).toISOString() ).map((transaction) => (
          <>
          
          <FinanceLine key={transaction._id} transactions={transaction} />
          </>
        ))}


        {/* {transactions.map((transaction) => (
          <FinanceLine key={transaction._id} transactions={transaction} />
        ))} */}
      </div>

      <NewTransactionModal
        isOpen={modalTransactionIsOpen}
        onRequestClose={closeModal}
      />
      {/* <Modal
        isOpen={modalTransactionIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      > */}
      {/* <TransactionsAdd props={openModal} /> */}
      {/* </Modal> */}
    </div>
  );
}

export default Finances;
