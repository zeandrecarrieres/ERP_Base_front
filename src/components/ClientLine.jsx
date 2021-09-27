import React from "react";
import { Delete, Edit } from "@material-ui/icons";

function ClientsLine({ clients }) {
  const deleteClient = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/clients/` + clients._id, {
      method: "DELETE",
    });
    alert("Cliente deletado com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 py-2 border">{clients.type}</td>
            <td className="w-1/12 px-12 border">{clients.category}</td>
            <td className="w-1/12 px-12 border">{clients.nick}</td>
            <td className="w-3/12 px-12 border">{clients.name}</td>
            <td className="w-2/12 px-12 border">{clients.email}</td>
            <td className="w-2/12 px-12 border">{clients.telephone}</td>
            <td className="w-1/12 px-12 border text-yellow-700 hover:text-yellow-500">
              <button>
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-12 border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteClient(clients._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ClientsLine;
