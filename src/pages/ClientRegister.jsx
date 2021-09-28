import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientLine from "../components/ClientLine";
// import { MicNone } from "@material-ui/icons";

function ProductRegister() {
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

  setName('')

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg p-8 m-4 md:max-w-2xl md:mx-auto ">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerClient}
        >
          <div className="text-3xl mb-8 text-gray-500">
            Inclusão de Clientes
          </div>

          <div className="flex justify-between">
            {/* <div className="flex flex-col mb-4">
              <label
                htmlFor="type"
                className="uppercase font-bold text-md text-gray-500"
              >
                Tipo
              </label>
              <input
                type="text"
                id="type"
                name="type"
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30"
                onChange={(e) => setType(e.target.value)}
              />
            </div> */}

<div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className="uppercase font-bold text-md text-gray-500"
              >
                Tipo
              </label>
              <select
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
                placeholder="category"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option
                  value="Final"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Final
                </option>
                <option
                  value="Revenda"
                  // name="Jurídica"
                  className="flex flex-col mb-4"
                >
                  Revenda
                </option>
              </select>
            </div>
          </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className="uppercase font-bold text-md text-gray-500"
              >
                Categoria
              </label>
              <select
                id="options-select"
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
                placeholder="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" className="flex flex-col mb-4">
                  -- Selecione uma opção --
                </option>
                <option
                  value="Fisica"
                  // name="Física"
                  className="flex flex-col mb-4"
                >
                  Física
                </option>
                <option
                  value="Juridica"
                  // name="Jurídica"
                  className="flex flex-col mb-4"
                >
                  Jurídica
                </option>
              </select>
            </div>
          

          <div className="flex flex-col mb-4">
            <label
              htmlFor="nick"
              className="uppercase font-bold text-md text-gray-500"
            >
              {category === "Fisica" ? "NOME" : "RAZÃO SOCIAL"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="uppercase font-bold text-md text-gray-500"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="telephone"
              className="uppercase font-bold text-md text-gray-500"
            >
              Telefone
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="address"
              className="uppercase font-bold text-md text-gray-500"
            >
              Endereço
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="complement"
              className="uppercase font-bold text-md text-gray-500"
            >
              Complemento
            </label>
            <input
              type="text"
              id="complement"
              name="complement"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="district"
              className="uppercase font-bold text-md text-gray-500"
            >
              Bairro
            </label>
            <input
              type="text"
              id="district"
              name="district"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="city"
              className="uppercase font-bold text-md text-gray-500"
            >
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="state"
                className="uppercase font-bold text-md text-gray-500"
              >
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="postal"
                className="uppercase font-bold text-md text-gray-500"
              >
                CEP
              </label>
              <input
                type="text"
                id="postal"
                name="postal"
                className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
                onChange={(e) => setPostal(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="cnp"
              className="uppercase font-bold text-md text-gray-500"
            >
              {category === "Fisica" ? "CPF" : "CNPJ"}
            </label>
            <input
              type="text"
              id="cnp"
              name="cnp"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setCnp(e.target.value)}
            />
          </div>

          {category === "Juridica" ?  <div className="flex flex-col mb-4">
            <label
              htmlFor="inscription"
              className="uppercase font-bold text-md text-gray-500"
            >
              INSCRIÇÃO ESTADUAL
            </label>
            <input
              type="text"
              id="inscription"
              name="inscription"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setInscription(e.target.value)}
            />
          </div> : null}


          {category === "Juridica" ?<div className="flex flex-col mb-4">
            <label
              htmlFor="site"
              className="uppercase font-bold text-md text-gray-500"
            >
              Site
            </label>
            <input
              type="text"
              id="site"
              name="site"
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setSite(e.target.value)}
            />
          </div>: null}
         

          <button className="px-5 py-3 bg-red-500 text-white hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>
      </div>
      <div className="mx-20">
        <h1 className="text-red-700 text-xl mt-20">Lista de Clientes</h1>
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
    </div>
  );
}

export default ProductRegister;
