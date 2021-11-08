import React, { useState, useEffect, useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
import TransactionLine from "../components/TransactionLine";
// import TransactionsAdd from "../components/TransactionAdd";
import { getCurrentMonth, filterListByMonth } from "../helpers/dateFilter";

import { NewTransactionModal } from "../components/NewTransactionModal";

function Transactions() {
  const transactions = useContext(TransactionsContext);
  
  const [modalTransactionIsOpen, setModalTransactionIsOpen] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filteredTransactionsByType, setFilteredTransactionsByType] = useState([]);
  const [transactionByType, setTransactionsByType] = useState(filteredTransactions);
  const [busca, setBusca] = useState("");
  const [type, setType] = useState();
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);
  const [month, setMonth] = useState(getCurrentMonth);
  const [counter, setCounter] = useState(1);

  // console.log(currentMonth)
  const anoAtual = new Date().getFullYear();
  const mesAtual = new Date().getMonth();

  function openModal() {
    setModalTransactionIsOpen(true);
  }

  function closeModal() {
    setModalTransactionIsOpen(false);
  }


  // const onChangeType = () => {
  //   setFilteredTransactions(filteredTransaction.filter(transactions.type === type));

  // }
    
   

  

  useEffect(() => {
    // setMonth(mesAtual)
    console.log(type)
    setFilteredTransactions(filterListByMonth(transactions, month));
    setFilteredTransactionsByType(filteredTransactions.filter(transactions => transactions.type === type));
  }, [month, type]);

  // console.log(filteredTransactions.filter(transactions => transactions.type === "Compra"))

  return (
    <div>
      <div className="mx-20 text-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-lg mt-20 ">Lista de Transações</h1>
          <div>
            
            
            <label htmlFor="month" className="pl-24 pr-12 font-medium">
              Mês:
            </label>
            <select
              name="month"
              id="month"
              onChange={(e) => setMonth(`${anoAtual}-${e.target.value}`)}
              defaultValue={mesAtual}
              className="border py-2  text-grey-darkest h-10 my-2 shadow bg-opacity-30 px-2 text-sm"
            >
              <option selected hidden value={mesAtual}>
                Selecione o mês
              </option>
              <option value="01">Janeiro</option>
              <option value="02">Fevereiro</option>
              <option value="03">Março</option>
              <option value="04">Abril</option>
              <option value="05">Maio</option>
              <option value="06">Junho</option>
              <option value="07">Julho</option>
              <option value="08">Agosto</option>
              <option value="09">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </div>

          <label htmlFor="type" className="pl-24 pr-12 font-medium">
              Tipo:
            </label>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
              defaultValue="Venda"
              className="border py-2  text-grey-darkest h-10 my-2 shadow bg-opacity-30 px-2 text-sm"
            >
              <option selected hidden>
                Selecione o tipo
              </option>
              <option value="Venda">Venda</option>
              <option value="Saída">Saída</option>
              <option value="Consignado">Consignado</option>
              <option value="Compra">Compra</option>
              <option value="Entrada">Entrada</option>
            </select>

          <label htmlFor="busca" className="p-12 font-medium">
              Pesquisa:
            </label>
            <input
              type="text"
              className="border py-2  text-grey-darkest h-10 my-2 shadow bg-opacity-30 px-2 text-sm"
              onChange={(e) => setBusca(e.target.value)}
            />

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
              <th className="w-1/12  border bg-gray-100 text-sm font-medium">
                Data
              </th>
              <th className="w-1/12  border bg-gray-100 text-sm font-medium">
                Tipo
              </th>
              <th className="w-1/12  border  bg-gray-100 text-sm font-medium">
                Usuário
              </th>
              {/* <th className="w-1/12  border bg-gray-100 text-sm font-medium">Comissão</th> */}
              <th className="w-3/12  border py-2  pl-12 bg-gray-100 text-sm font-medium">
                Cliente
              </th>
              {/* <th className="w-1/12  pl-36 border bg-gray-100 text-sm font-medium">
                Produto
              </th>
              <th className="w-1/12  pl-60 border bg-gray-100 text-sm font-medium">
                Qtde
              </th>
              <th className="w-1/12  pl-60 border bg-gray-100 text-sm font-medium">
                Valor
              </th> */}
              <th className="w-3/12 pl-60 border bg-gray-100 text-sm font-medium">
                Valor Total
              </th>
              <th className="w-1/12 pl-12 border bg-gray-100 text-sm font-medium">
                Vcto
              </th>
              <th className="w-1/12 pl-20 border bg-gray-100 text-sm font-medium">
                Editar
              </th>
              <th className="w-1/12 border bg-gray-100 text-sm font-medium">
                Excluir
              </th>
            </tr>
          </thead>
        </table>

        {/* {console.log(filteredTransactions)} */}

        {filteredTransactionsByType.map((transaction) => (
          <TransactionLine
            key={transaction._id}
            transactions={transaction}
            counter={counter}
           
          />
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
