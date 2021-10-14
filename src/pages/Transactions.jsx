import React, { useState, useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
import TransactionLine from "../components/TransactionLine";
// import TransactionsAdd from "../components/TransactionAdd";

import { NewTransactionModal } from "../components/NewTransactionModal";

function Transactions() {
  const transactions = useContext(TransactionsContext);
  const [modalTransactionIsOpen, setModalTransactionIsOpen] = useState(false);

  function openModal() {
    setModalTransactionIsOpen(true);
  }

  function closeModal() {
    setModalTransactionIsOpen(false);
  }

  return (
    <div>
      <div className="mx-20 text-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-lg mt-20 ">
            Lista de Transações
          </h1>
          <button
            onClick={openModal}
            className="flex justify-center items-center text-base bg-gray-700 hover:bg-gray-500 text-white p-3 rounded align-rigth h-8 mt-4 "
          >
            +
          </button>
        </div>
        <table className="table-fixed border w-full ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12  border bg-gray-100 text-sm font-medium">Data</th>
              <th className="w-1/12  border bg-gray-100 text-sm font-medium">Tipo</th>
              <th className="w-1/12  border bg-gray-100 text-sm font-medium">Usuário</th>
              {/* <th className="w-1/12  border bg-gray-100 text-sm font-medium">Comissão</th> */}
              <th className="w-1/12  border py-2 bg-gray-100 text-sm font-medium">Cliente</th>
              <th className="w-1/12  pl-12 border bg-gray-100 text-sm font-medium">Produto</th>
              <th className="w-1/12  pl-32 border bg-gray-100 text-sm font-medium">Qtde</th>
              <th className="w-1/12  pl-28 border bg-gray-100 text-sm font-medium">Valor</th>
              <th className="w-2/12 pl-20 border bg-gray-100 text-sm font-medium">Valor Total</th>
              <th className="w-1/12 border bg-gray-100 text-sm font-medium">Vcto</th>
              <th className="w-1/12 border bg-gray-100 text-sm font-medium">Editar</th>
              <th className="w-1/12 border bg-gray-100 text-sm font-medium">Excluir</th>
            </tr>
          </thead>
        </table>

        {transactions.map((transaction) => (
          <TransactionLine key={transaction._id} transactions={transaction} />
        ))}
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

export default Transactions;
