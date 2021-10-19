// import React, { useState, useContext } from "react";
// import { Delete, Edit } from "@material-ui/icons";
// import { NewProductModal } from "../components/NewProductModal";

// import { TransactionsContext } from "../TransactionsContext";

// function ProductsLine({ products }) {
//   const [counter, setCounter] = useState(0);
//   const [modalProductIsOpen, setModalProductIsOpen] = useState(false);

//   const transactions = useContext(TransactionsContext);

//   function openProductModal() {
//     setModalProductIsOpen(true);
//   }

//   function closeProductModal() {
//     setModalProductIsOpen(false);
//   }

//   const deleteProduct = async () => {
//     await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id, {
//       method: "DELETE",
//     });
//     alert("Produto deletado com sucesso!");
//     setCounter(counter + 1);
//   };

//   const editProduct = async () => {
//     await fetch(`${process.env.REACT_APP_URL_API}/products/` + products._id);

//     console.log(products._id);
//     setCounter(counter + 1);
//     //  openProductModal()
//   };

//   return (
//     <>
//       <table className="table-fixed border w-full  ">
//         <tbody>
//           <tr>
//             <td className="w-1/12 py-2 border text-sm">{products.code}</td>
//             <td className="w-2/12 border text-sm">{products.category}</td>
//             <td className="w-2/12 border text-sm">{products.name}</td>
//             <td className="w-2/12 pl-12 border text-sm">
//               {products.description}
//             </td>
//             <td className="w-1/12 border text-sm">
//               {products.purchase_price
//                 .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
//                 .replace(".", ",")}
//             </td>
//             <td className="w-1/12  border text-sm">
//               {products.reference_price
//                 .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
//                 .replace(".", ",")}
//             </td>

//             <td className="w-1/12 px-12 border text-sm">
//               {transactions
//                 .filter((transaction) => transaction.product === products.name)
//                 .reduce((acc, transaction) => {
//                   // console.log( typeof(acc))
//                   // console.log( typeof(transaction.qtde))
//                   return (
//                     acc +
//                     (transaction.type === "Venda" ||
//                     transaction.type === "Consignado"
//                       ? -transaction.qtde
//                       : transaction.qtde)
//                   );
//                 }, 0)}
//             </td>
//             {/* <td className="w-1/12 px-12 border">{transactions.filter(transaction =>transaction.product === products.name).reduce((acc, transaction) =>acc - transaction.qtde ,0)}</td> */}

//             <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
//               <button onClick={(e) => editProduct(products._id)}>
//                 <Edit />
//               </button>
//             </td>
//             <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
//               <button value="6" onClick={(e) => deleteProduct(products._id)}>
//                 <Delete />
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <NewProductModal
//         isOpen={modalProductIsOpen}
//         onRequestClose={closeProductModal}
//       />
//     </>
//   );
// }

// export default ProductsLine;
