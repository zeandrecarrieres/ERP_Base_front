import React from "react";
import { Delete, Edit } from "@material-ui/icons";

function TransactionsLine({ transactions }) {
  const deleteTransaction = async () => {
    await fetch(
      `${process.env.REACT_APP_URL_API}/transactions/` + transactions._id,
      {
        method: "DELETE",
      }
    );
    alert("Transação deletada com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-2/12 px-12 py-2 border">{transactions.date}</td>
            <td className="w-2/12 px-12 py-2 border">{transactions.type}</td>
            <td className="w-3/12 px-12 border">{transactions.client}</td>
            <td className="w-3/12 px-12 border">{transactions.product}</td>
            <td className="w-1/12 px-12 border">{transactions.qtde}</td>
            <td className="w-1/12 px-12 border">
              {transactions.reference_price}
            </td>
            <td className="w-1/12 px-12 border" readOnly>
              {transactions.total_price}
            </td>
            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button>
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
              <button
                value="6"
                onClick={(e) => deleteTransaction(transactions._id)}
              >
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TransactionsLine;
