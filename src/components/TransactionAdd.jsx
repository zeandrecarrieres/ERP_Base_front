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
  const [supplierOptions, setSupplierOptions] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [obs, setObs] = useState("");
  const [counter, setCounter] = useState(1);

  const transactions = useContext(TransactionsContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/products`)
      .then((response) => response.json())
      .then((data) => setProductOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/clients`)
      .then((response) => response.json())
      .then((data) => setClientOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/suppliers`)
      .then((response) => response.json())
      .then((data) => setSupplierOptions(data))
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
      url: `${process.env.REACT_APP_URL_API}/transactions`,
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
      setCounter(counter + 1);
      
      
      
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
            {type === "Compra" ? "FORNECEDOR" : "CLIENTE"}
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
            {type === "Compra" ? supplierOptions.map((option) => (
              <option value={option.name}>{option.name}</option>
            )) : clientOptions.map((option) => (
              <option value={option.name}>{option.name}</option>
            )) }
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
                // setTotal_price(qtde * e.target.value);
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
              type="float"
              id="salePrice"
              name="salePrice"
              className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-32 "
              onChange={(e) => {
                setReference_price(parseFloat(e.target.value));
                setTotal_price(qtde * e.target.value);
                console.log(reference_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
              }}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="discount"
              className="uppercase font-bold text-md text-gray-500"
            >
              % Desconto
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              // value={discount}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full "
              onChange={(e) => {setDiscount(e.target.value);
                // console.log(total_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
                // console.log(discount)
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
              value={(total_price*(1-discount/100)).toFixed(2)}
              readOnly
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full "
              // onChange={(e) => setTotal_price(e.target.value)}
            />
            <label
              htmlFor="totalPrice"
              className="uppercase font-bold text-md text-gray-500"
            >
              Observação
            </label>
            <textarea
              rows="4" 
              cols="50" 
              // maxlength="200"
              type="string"
              id="obs"
              name="obs"
              value={obs}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full "
              onChange={(e) => setObs(e.target.value)}
            />
          </div>
        </div>

        <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded w-full sm:w-auto">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default TransactionAdd;
