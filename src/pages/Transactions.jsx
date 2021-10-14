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
              <th className="w-1/12  border bg-gray-100">Data</th>
              <th className="w-1/12  border bg-gray-100">Tipo</th>
              <th className="w-1/12  border bg-gray-100">Usuário</th>
              {/* <th className="w-1/12  border bg-gray-100">Comissão</th> */}
              <th className="w-1/12  border py-2 bg-gray-100">Cliente</th>
              <th className="w-1/12  pl-12 border bg-gray-100">Produto</th>
              <th className="w-1/12  pl-32 border bg-gray-100">Qtde</th>
              <th className="w-1/12  pl-28 border bg-gray-100">Valor</th>
              <th className="w-2/12 pl-20 border bg-gray-100">Valor Total</th>
              <th className="w-1/12 border bg-gray-100">Vcto</th>
              <th className="w-1/12 border bg-gray-100">Editar</th>
              <th className="w-1/12 border bg-gray-100">Excluir</th>
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
