import React from "react";
import { Delete, Edit } from '@material-ui/icons';

function ProductsLine({ products }) {
  const deleteProduct = async ()=>{
    await fetch(`https://wineerpback.herokuapp.com/products/`+products._id, {
      method: "DELETE",

    })
    alert('Produto deletado com sucesso!')
  }
  return (
    <>
      <table className="table-fixed border w-full ">
        
        <tbody>
          <tr>
            <td  className="w-1/12 px-12 py-2 border">{products.code}</td>
            <td  className="w-1/12 px-12 border">{products.category}</td>
            <td  className="w-2/12 px-12 border">{products.name}</td>
            <td  className="w-2/12 px-12 border">{products.description}</td>
            <td  className="w-1/12 px-12 border">{products.purchase_price}</td>
            <td  className="w-1/12 px-12 border">{products.reference_price}</td>
            <td  className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500" >
              <button><Edit /></button>
            </td>
            <td  className="w-1/12 px-12 border text-red-700 hover:text-red-500" >
              <button value="6" onClick={(e)=>deleteProduct(products._id)}><Delete /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductsLine;
