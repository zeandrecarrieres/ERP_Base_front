import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientLine from "../components/ClientLine";
import Modal from "react-modal";
import { NewClientModal } from "../components/NewClientModal";
// import { MicNone } from "@material-ui/icons";

function Clients() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [nick, setNick] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [cnp, setCnp] = useState("");
  const [inscription, setInscription] = useState("");
  const [site, setSite] = useState("");
  const [clients, setClients] = useState([]);
  const [counter, setCounter] = useState(1);
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
  }, [counter, category]);

  const registerClient = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/clients`,
      data: {
        type,
        category,
        nick,
        name,
        email,
        telephone,
        address,
        complement,
        district,
        city,
        state,
        postal,
        cnp,
        inscription,
        site,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        alert("Cliente Cadastrado com sucesso!");
        setCounter(counter + 1);
        console.log(category);
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
        alert("Preencha todos os campos!");
      });
  };

  

  return (
    <div>
      
      <div className="mx-20">
        <h1 className="text-red-700 text-xl mt-20">Lista de Clientes</h1>
        <button
            onClick={openClientModal}
            className="flex justify-center items-center text-xl bg-gray-700 hover:bg-gray-500 text-white p-4 rounded align-rigth h-12 mt-4 "
          >
            +
          </button>
        <table className="table-fixed border w-full ">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12  border bg-gray-100">Tipo</th>
              <th className="w-1/12 px-12 border py-2 bg-gray-100">
                Categoria
              </th>
              <th className="w-1/12 px-12 border bg-gray-100">Nome</th>
              <th className="w-3/12 px-12 border bg-gray-100">Razão Social</th>
              <th className="w-2/12 px-12 border bg-gray-100">Email</th>
              <th className="w-2/12 px-12 border bg-gray-100">Telefone</th>
            </tr>
          </thead>
        </table>

        {clients.map((client) => (
          <ClientLine key={client._id} clients={client} />
        ))}
      </div>

      <NewClientModal
      isOpen={modalClientIsOpen}
      onRequestClose={closeClientModal} />

    </div>
  );
}

export default Clients;
