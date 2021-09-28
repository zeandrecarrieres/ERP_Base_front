import React, { useState, useEffect } from "react";
import ClientLine from "../components/ClientLine";
import { NewClientModal } from "../components/NewClientModal";

function Clients() {
  const [clients, setClients] = useState([]);
  const [modalClientIsOpen, setModalClientIsOpen] = useState(false);

  function openClientModal() {
    setModalClientIsOpen(true);
  }

  function closeClientModal() {
    setModalClientIsOpen(false);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/clients`)
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  
  return (
    <div>
      <div className="mx-20">
        <div className="flex justify-between items-center">
          <h1 className="text-red-700 text-xl mt-20 font-bold">
            Lista de Clientes
          </h1>
          <button
            onClick={openClientModal}
            className="flex justify-center items-center text-xl bg-gray-700 hover:bg-gray-500 text-white p-4 rounded align-rigth h-12 mt-4 "
          >
            +
          </button>
        </div>
        <table className="table-fixed border w-full ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12  border bg-gray-100">Tipo</th>
              <th className="w-1/12  border py-2 bg-gray-100">Categoria</th>
              <th className="w-2/12  border bg-gray-100">Nome/Razão Social</th>
              <th className="w-2/12  border bg-gray-100">Email</th>
              <th className="w-2/12  border bg-gray-100">Telefone</th>
              <th className="w-1/12  border bg-gray-100">Editar</th>
              <th className="w-1/12  border bg-gray-100">Excluir</th>
            </tr>
          </thead>
        </table>

        {clients.map((client) => (
          <ClientLine key={client._id} clients={client} />
        ))}
      </div>

      <NewClientModal
        isOpen={modalClientIsOpen}
        onRequestClose={closeClientModal}
      />
    </div>
  );
}

export default Clients;
