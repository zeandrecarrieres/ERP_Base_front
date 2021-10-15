import React from "react";
import { Delete, Edit } from "@material-ui/icons";

function UsersLine({ users }) {
  const deleteUser = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/users/` + users._id, {
      method: "DELETE",
    });
    alert("Usuário deletado com sucesso!");
  };

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 border text-sm">{users.type}</td>
            {/* <td className="w-1/12 border">{users.category}</td> */}
            {/* <td className="w-1/12 px-16 border">{users.username}</td> */}
            <td className="w-2/12 px-12 border">{users.name}</td>
            <td className="w-1/12 border">{users.email}</td>
            <td className="w-1/12 px-12 border">{users.telephone}</td>
            <td className="w-1/12 px-20 border text-yellow-700 hover:text-yellow-500">
              <button>
                <Edit />
              </button>
            </td>
            <td className="w-1/12 px-20 border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteUser(users._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UsersLine;
