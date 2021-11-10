import React, { useState, useContext } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { EditProductModal } from "../components/EditProductModal";
import { TransactionsContext } from "../TransactionsContext";

function ProductsLine({ products }) {
  const transactions = useContext(TransactionsContext);

  const [modalEditProductIsOpen, setModalEditProductIsOpen] = useState(false);

  // console.log(
  //   transactions[1].productListItems
  //     .filter((transaction) => transaction[0] === "61769e78f8d78518c0471ab9")
  //     .reduce((acc, transaction) => {
  //       return (
  //         acc + (transaction.type === "Venda" ? -transactions[1] : transaction)
  //       );
  //     })
  // );

  function openEditProductModal() {
    setModalEditProductIsOpen(true);
  }

  function closeEditProductModal() {
    setModalEditProductIsOpen(false);
  }

  const deleteProduct = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id, {
      method: "DELETE",
    });
    alert("Produto deletado com sucesso!");
  };

  const openModalWithId = (id) => {
    console.log(products._id);
    openEditProductModal();
  };

  return (
    <>
      <table className="table-fixed border w-full  ">
        <tbody>
          <tr>
            <td className="w-1/12 py-2 border text-sm">{products.code}</td>
            <td className="w-2/12 border text-sm">{products.category}</td>
            <td className="w-3/12 border text-sm">{products.name}</td>
            <td className="w-3/12 border text-sm">{products.description}</td>
            <td className="w-1/12 border px-4 text-sm">
              {products.purchase_price
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
                .replace(".", ",")}
            </td>
            <td className="w-1/12  pl-12 border text-sm">
              {products.reference_price
                .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
                .replace(".", ",")}
            </td>

            <td className="w-1/12 px-12 border text-sm">
              {transactions
                .filter((transaction) => transaction.product === products.name)
                .map((transaction) => console.log(transaction.name))}
              {/* {transactions
                .filter((transaction) => transaction.product === products.name)
                .reduce((acc, transaction) => {
                  // console.log( typeof(acc))
                  console.log( typeof(transaction.qtde))
                  return (
                    acc +
                    (transaction.type === "Venda" ||
                    transaction.type === "Consignado"
                      ? -transaction.qtde
                      : transaction.qtde)
                  );
                }, 0)} */}
              {/* {console.log(transactions)}  */}
            </td>
            {/* <td className="w-1/12 px-12 border">{transactions.filter(transaction =>transaction.product === products.name).reduce((acc, transaction) =>acc - transaction.qtde ,0)}</td> */}

            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button onClick={(e) => openModalWithId(products._id)}>
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

      <EditProductModal
        isOpen={modalEditProductIsOpen}
        onRequestClose={closeEditProductModal}
        id={products._id}
      />
    </>
  );
}

export default ProductsLine;
