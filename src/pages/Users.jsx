import React, { useState, useEffect } from "react";
import UserLine from "../components/UserLine";
import { NewUserModal } from "../components/NewUserModal";

function Users() {
  const [users, setUsers] = useState([]);
  const [modalUserIsOpen, setModalUserIsOpen] = useState(false);

  function openUserModal() {
    setModalUserIsOpen(true);
  }

  function closeUserModal() {
    setModalUserIsOpen(false);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [users]);

  
  return (
    <div>
      <div className="mx-20">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-xl mt-20 font-based">
            Lista de Usuários
          </h1>
          <button
            onClick={openUserModal}
            className="flex justify-center items-center text-base bg-gray-700 hover:bg-gray-500 text-white p-3 rounded align-rigth h-8 mt-4 "
          >
            +
          </button>
        </div>
        <table className="table-fixed border w-full ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12  border bg-gray-100 font-medium text-sm">Tipo</th>
              <th className="w-2/12  border bg-gray-100 font-medium text-sm">Nome</th>
              <th className="w-1/12  border bg-gray-100 font-medium text-sm">Email</th>
              <th className="w-1/12  border bg-gray-100 font-medium text-sm">Telefone</th>
              <th className="w-1/12  border bg-gray-100 font-medium text-sm">Editar</th>
              <th className="w-1/12  border bg-gray-100 font-medium text-sm">Excluir</th>
            </tr>
          </thead>
        </table>

        {users.map((user) => (
          <UserLine key={user._id} users={user} />
        ))}
      </div>

      <NewUserModal
        isOpen={modalUserIsOpen}
        onRequestClose={closeUserModal}
      />
    </div>
  );
}

export default Users;
