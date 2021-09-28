import React, { useContext } from "react";
import { Delete, Edit } from "@material-ui/icons";

import { TransactionsContext } from "../TransactionsContext";

function ProductsLine({ products }) {
  const deleteProduct = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id, {
      method: "DELETE",
    });
    alert("Produto deletado com sucesso!");
  };
  const transactions = useContext(TransactionsContext);

  // const totalStock = transactions.reduce((acc, transaction) => {
  //   if (transaction.type = "Venda") {
  //     return acc + transaction.total_price;
  //   }
  //   return acc;
  // }, 0);

  console.log(transactions)

  const stockItem = transactions.filter((transaction) => {
    if ( transaction.name === products.name) {
      return transaction.qtde;
    }
    return transaction.qtde;
  }, 0);


  // const stockItem = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "Venda" || transaction.name === products.name) {
  //     return acc + transaction.qtde;
  //   }
  //   return acc;
  // }, 0);

  console.log(stockItem, products.name, transactions.name)
 


 

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 py-2 border">{products.code}</td>
            <td className="w-1/12 px-12 border">{products.category}</td>
            <td className="w-2/12 px-12 border">{products.name}</td>
            <td className="w-2/12 px-12 border">{products.description}</td>
            <td className="w-1/12 px-12 border">{(products.purchase_price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}</td>
            <td className="w-1/12 px-12 border">{(products.reference_price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
              .replace(".", ",")}</td>
            <td className="w-1/12 px-12 border">0</td>
            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button>
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
