import React, { useState, useContext } from "react";
import { Delete, Edit } from "@material-ui/icons";

import { TransactionsContext } from "../TransactionsContext";

function ProductsLine({ products }) {
  const [counter, setCounter]=useState(0)


  const deleteProduct = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id, {
      method: "DELETE",
    });
    alert("Produto deletado com sucesso!");
    setCounter(counter + 1);
    
  };

  const transactions = useContext(TransactionsContext);



  // console.log(transactions) 

  // const prodQtde = transactions.filter(transaction => transaction.product === "vinho branco")
  // console.log('antes')
  // console.log(prodQtde)
  // console.log('depois')

  // const totalStock = transactions.reduce((acc, transaction) => {
  //   if (transaction.qtde = "Venda") {
  //     return acc + transaction.total_price;
  //   }
  //   return acc;
  // }, 0);

  // console.log(totalStock)

  // const stockItem = transactions.filter((transaction) => {
  //   if ( transaction.name === products.name) {
  //     return transaction.qtde;
  //   }
  //   return transaction.qtde;
  // }, 0);


  // const stockItem = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "Venda" || transaction.name === products.name) {
  //     return acc + transaction.qtde;
  //   }
  //   return acc;
  // }, 0);

  // console.log(stockItem, products.name, transactions.name)
 

  // const filter = transactions.filter(transaction =>transaction.product === product.name).reduce((acc, transaction) =>acc + transaction.qtde ,0)
  
  // console.log(filter)
 const debitStockTransaction = transactions.filter(transaction => transaction.type === "Venda" || "Consignado")
 const creditStockTransaction = transactions.filter(transaction => transaction.type === "Compra")

 console.log(debitStockTransaction)
 console.log(creditStockTransaction)

// const stock = transactions.reduce((acc, transaction) =>acc + transaction.type === 'Venda' ? - transaction.qtde : transaction.qdte ,0)

// console.log(stock)


  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 py-2 border">{products.code}</td>
            <td className="w-2/12 px-12 border">{products.category}</td>
            <td className="w-2/12  border">{products.name}</td>
            <td className="w-2/12 border">{products.description}</td>
            <td className="w-1/12 border">{(products.purchase_price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}</td>
            <td className="w-1/12  border">{(products.reference_price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}</td>
             
              <td className="w-1/12 px-12 border">{transactions.filter(transaction =>transaction.product === products.name).reduce((acc, transaction) => {
  console.log( typeof(acc))
  console.log( typeof(transaction.qtde))
  return acc + (transaction.type === 'Venda' || transaction.type === 'Consignado' ?  -transaction.qtde : transaction.qtde)}
, 0)}</td>
              {/* <td className="w-1/12 px-12 border">{transactions.filter(transaction =>transaction.product === products.name).reduce((acc, transaction) =>acc - transaction.qtde ,0)}</td> */}
           
            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button>
                {/* {console.log(debitStockTransaction)} */}
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteProduct(products._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductsLine;
