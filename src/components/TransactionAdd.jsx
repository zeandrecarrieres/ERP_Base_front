import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TransactionsContext } from "../TransactionsContext";

function TransactionAdd() {
    const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [client, setClient] = useState("");
  const [product, setProduct] = useState("");
  const [qtde, setQtde] = useState(0);
  const [reference_price, setReference_price] = useState(0);
  const [total_price, setTotal_price] = useState(0);
  const [productOptions, setProductOptions] = useState([]);
  const [clientOptions, setClientOptions] = useState([]);

  const transactions = useContext(TransactionsContext);

  useEffect(() => {
    fetch('https://wineerpback.herokuapp.com/products')
    // fetch(`${process.env.REACT_APP_API_URL}/client`)
    // fetch("https://erpbacken.herokuapp.com/products/")
      .then((response) => response.json())
      .then((data) => setProductOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
      fetch('https://wineerpback.herokuapp.com/clients')
    // fetch(`${process.env.REACT_APP_API_URL}/client`)
    // fetch("https://erpbacken.herokuapp.com/clients/")
      .then((response) => response.json())
      .then((data) => setClientOptions(data))
      .catch((error) => console.log(error));
  }, []);

  const registerTransaction = (e) => {
    e.preventDefault();
    console.log(
      date,
      type,
      client,
      product,
      qtde,
      reference_price,
      total_price,
      productOptions,
      clientOptions
    );

    axios({
      method: "post",
      url: "https://wineerpback.herokuapp.com/transactions",
      // url: `${process.env.REACT_APP_URL_API}/products`,
      data: {
        date,
        type,
        client,
        product,
        qtde,
        reference_price,
        total_price,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        //  addCounter();
        console.log(reponse);
        alert("Transação efetuada com sucesso!");
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
        alert("Preencha todos os campos");
      });
  };

    return (
        <div className="w-90 bg-white rounded shadow-lg p-8 m-4 md:max-w-2xl md:mx-auto">
        
        

        <form
        action="#"
        className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
        onSubmit={registerTransaction}
      >
        <div className="text-3xl mb-8 text-gray-500">Transações</div>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="date"
              className="uppercase font-bold text-md text-gray-500"
            >
              Data
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label
              htmlFor="client"
              className="uppercase font-bold text-md text-gray-500 w-64"
            >
              Tipo
            </label>
            <select
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
              id="options-select"
              placeholder="description"
              // onClick={(e) => getProducts(e)}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" className="flex flex-col mb-4">
                -- Selecione uma opção --
              </option>

              <option value="Venda">Venda</option>
              <option value="Compra">Compra</option>
              <option value="Consignado">Consignado</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-4 ">
          <label
            htmlFor="client"
            className="uppercase font-bold text-md text-gray-500 w-64"
          >
            Cliente
          </label>
          <select
            className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
            id="options-select"
            placeholder="description"
            // onClick={(e) => getProducts(e)}
            onChange={(e) => setClient(e.target.value)}
          >
            <option value="" className="flex flex-col mb-4">
              -- Selecione uma opção --
            </option>
            {clientOptions.map((option) => (
              <option value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="product"
            className="uppercase font-bold text-md text-gray-500 w-64"
          >
            Produto
          </label>
          <select
            className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
            id="options-select"
            placeholder="description"
            // onClick={(e) => getProducts(e)}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="" className="flex flex-col mb-4">
              -- Selecione uma opção --
            </option>
            {productOptions.map((option) => (
              <option value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="qtde"
              className="uppercase font-bold text-md text-gray-500"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="qtde"
              name="qtde"
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-32"
              onChange={(e) => {
                setTotal_price(qtde * e.target.value);
                setQtde(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="salePrice"
              className="uppercase font-bold text-md text-gray-500"
            >
              Preço Venda
            </label>
            <input
              type="number"
              id="salePrice"
              name="salePrice"
              className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-32 "
              onChange={(e) => {
                setReference_price(e.target.value);
                setTotal_price(qtde * e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="totalPrice"
              className="uppercase font-bold text-md text-gray-500"
            >
              Total
            </label>
            <input
              type="number"
              id="totalPrice"
              name="totalPrice"
              value={total_price}
              readOnly
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full "
              // onChange={(e) => setTotal_price(e.target.value)}
            />
          </div>
        </div>

        <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded w-full sm:w-auto">
          Cadastrar
        </button>
      </form>
      </div>
    )
}

export default TransactionAdd
