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
            <td className="w-1/12   py-2 border">
              {new Intl.DateTimeFormat("pt-br").format(
                new Date(transactions.date)
              )}
            </td>
            <td className="w-1/12 border">{transactions.type}</td>

            <td className="w-3/12 border">{transactions.client}</td>

            {}

            {transactions.total_price > 0 ? (
              <td className="w-1/12 border text-green-500">
                {transactions.total_price
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(".", ",")}
              </td>
            ) : (
              <td className="w-1/12  border text-green-500">
                {(transactions.total_price * -1)
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replace(".", ",")}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TransactionsLine;
