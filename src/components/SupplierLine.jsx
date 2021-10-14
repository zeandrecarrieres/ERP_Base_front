import React from "react";
import { Delete, Edit } from "@material-ui/icons";

function SuppliersLine({ suppliers }) {
  const deleteSupplier = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/suppliers/` + suppliers._id, {
      method: "DELETE",
    });
    alert("Fornecedor deletado com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 py-2 border text-sm">{suppliers.type}</td>
            <td className="w-1/12 px-12  text-sm">{suppliers.category}</td>
            {/* <td className="w-1/12 px-12  text-sm">{suppliers.nick}</td> */}
            <td className="w-3/12 px-12  text-sm">{suppliers.name}</td>
            <td className="w-2/12 px-12  text-sm">{suppliers.email}</td>
            <td className="w-2/12 px-12  text-sm">{suppliers.telephone}</td>
            <td className="w-1/12 px-12  text-sm text-yellow-700 hover:text-yellow-500">
              <button>
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteSupplier(suppliers._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default SuppliersLine;
