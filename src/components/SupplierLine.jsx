import { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { EditSupplierModal } from "../components/EditSupplierModal";

function SuppliersLine({ suppliers }) {
  const [modalEditSupplierIsOpen, setModalEditSupplierIsOpen] = useState(false);

  function openEditSupplierModal() {
    setModalEditSupplierIsOpen(true);
  }

  function closeEditSupplierModal() {
    setModalEditSupplierIsOpen(false);
  }

  const deleteSupplier = async () => {
    await fetch(`${process.env.REACT_APP_URL_API}/suppliers/` + suppliers._id, {
      method: "DELETE",
    });
    alert("Fornecedor deletado com sucesso!");
  };

  const openModalWithId = (id) => {
    console.log(suppliers._id);
    openEditSupplierModal();
  };

  return (
    <>
      <table className="table-fixed border w-full ">
        <tbody>
          <tr>
            <td className="w-1/12 px-12 py-2 border text-sm">
              {suppliers.type}
            </td>
            <td className="w-1/12 px-12  text-sm">{suppliers.category}</td>
            {/* <td className="w-1/12 px-12  text-sm">{suppliers.nick}</td> */}
            <td className="w-3/12 px-12  text-sm">{suppliers.name}</td>
            <td className="w-2/12 px-12  text-sm">{suppliers.email}</td>
            <td className="w-2/12 px-12  text-sm">{suppliers.telephone}</td>
            <td className="w-1/12 px-12  text-sm text-yellow-700 hover:text-yellow-500">
              <button onClick={(e) => openModalWithId(suppliers._id)}>
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

      <EditSupplierModal
        isOpen={modalEditSupplierIsOpen}
        onRequestClose={closeEditSupplierModal}
        id={suppliers._id}
      />
    </>
  );
}

export default SuppliersLine;
