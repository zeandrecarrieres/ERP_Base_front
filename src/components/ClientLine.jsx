import {useState} from "react";
import { Delete, Edit } from "@material-ui/icons";
import { EditClientModal } from "../components/EditClientModal";

function ClientsLine({ clients }) {
  const [modalEditClientIsOpen, setModalEditClientIsOpen] = useState(false);


  const deleteClient = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/clients/` + clients._id, {
      method: "DELETE",
    });
    alert("Cliente deletado com sucesso!");
  };


  function openEditClientModal() {
    setModalEditClientIsOpen(true);
  }

  function closeEditClientModal() {
    setModalEditClientIsOpen(false);
  }


  const openModalWithId = (id) => {
    console.log(clients._id);
    openEditClientModal();
  };

  return (
    <>
      <table className="table-fixed border w-4/6 ">
        <tbody>
          <tr>
            <td className="w-2/12  px-2 py-2  text-sm">{clients.type}</td>
            <td className="w-2/12  text-sm">{clients.category}</td>
            {/* <td className="w-1/12 px-12  text-sm">{clients.nick}</td> */}
            <td className="w-3/12   text-sm">{clients.name}</td>
            <td className="w-3/12   text-sm">{clients.email}</td>
            <td className="w-2/12   text-sm">{clients.telephone}</td>
            <td className="w-1/12   text-sm text-yellow-700 hover:text-yellow-500">
              <button onClick={(e) => openModalWithId(clients._id)}>
                <Edit />
              </button>
            </td>
            <td className="w-1/12  border text-red-700 hover:text-red-500">
              <button value="6" onClick={(e) => deleteClient(clients._id)}>
                <Delete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <EditClientModal
        isOpen={modalEditClientIsOpen}
        onRequestClose={closeEditClientModal}
        id={clients._id}
      />

    </>
  );
}

export default ClientsLine;
