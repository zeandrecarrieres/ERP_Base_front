import React, { useState, useEffect } from "react";
import axios from "axios";

// import { TransactionsContext } from "../TransactionsContext";

function TransactionAdd({ onTransactionModalClose }) {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [client, setClient] = useState("");
  const [user, setUser] = useState("");
  const [product, setProduct] = useState("");
  const [qtde, setQtde] = useState(0);
  const [reference_price, setReference_price] = useState(0);
  const [productOptions, setProductOptions] = useState([]);
  const [total_price, setTotal_price] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const [clientOptions, setClientOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [supplierOptions, setSupplierOptions] = useState([]);

  const [comission, setComission] = useState(0);
  const [condition_payment, setCondition_payment] = useState("");
  const [vcto, setVcto] = useState("");
  const [form_payment, setForm_payment] = useState("");
  const [obs, setObs] = useState("");
  const [counter, setCounter] = useState(1);

  const [productsItems, setProductsItems] = useState([0,0,0,0,0]);
  const [productListItems, setProductListItems] = useState([[0,0,0,0,0]]);

  

  // const transactions = useContext(TransactionsContext);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_URL_API}/products`)
  //     .then((response) => response.json())
  //     .then((data) => setProductOptions(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/clients`)
      .then((response) => response.json())
      .then((data) => setClientOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/users`)
      .then((response) => response.json())
      .then((data) => setUserOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/suppliers`)
      .then((response) => response.json())
      .then((data) => setSupplierOptions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/products`)
      .then((response) => response.json())
      .then((data) => setProductOptions(data))
      .catch((error) => console.log(error));
  }, []);

  const includeItem = () => {
    let listItem = [product, qtde, reference_price, discount, total_price]
    setProductsItems(listItem);
    let newList = [...productListItems, productsItems];

    setProductListItems(newList);
    setTotalValue(productListItems.map((item) => item[4]).reduce((acc,item)=>acc+item))
    
  };

  // useEffect(() => {
  //   function updateTotal() {
  //     const totalValueAdd = () => {
  //       productListItems.map((item) => item[4]).reduce((acc,item)=>acc+item)
  //   }
  //   setTotalValue(totalValueAdd)}
  // },[])
  
 

  console.log((productListItems));

 


  const registerTransaction = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/transactions`,
      data: {
        date,
        type,
        client,
        user,
        comission,
        productListItems,
        // product,
        // qtde,
        // reference_price,
        totalValue,
        condition_payment,
        vcto,
        form_payment,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        //  addCounter();
        // console.log(reponse);
        alert("Transação efetuada com sucesso!");

        setDate("");
        setType("");
        setClient("");
        setUser("");
        setProduct("");
        setQtde("");
        setReference_price("");
        setTotal_price(0);
        setProductOptions([]);
        setClientOptions([]);
        setUserOptions([]);
        setSupplierOptions([]);
        setDiscount(0);
        setComission(0);
        setObs("");

        setCounter(counter + 1);
        onTransactionModalClose();
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
        alert("Preencha todos os campos");
      });
  };

  return (
    <div className="w-90 bg-white rounded shadow-lg p-8 m-4 w-7/12 mx-auto">
      <form
        action="#"
        className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
        onSubmit={registerTransaction}
      >
        <div className="text-xl mb-8 text-gray-500">Transações</div>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col mb-4">
            <label htmlFor="date" className="font-bold text-sm text-gray-500">
              Data
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 text-sm"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label
              htmlFor="client"
              className="font-bold text-sm text-gray-500 w-64"
            >
              Tipo
            </label>
            <select
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
              id="options-select"
              placeholder="description"
              // onClick={(e) => getProducts(e)}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" className="flex flex-col mb-4">
                -- Selecione uma opção --
              </option>

              <option value="Venda">Venda</option>
              <option value="Saída">Saída</option>
              <option value="Consignado">Consignado</option>
              <option value="Compra">Compra</option>
              <option value="Entrada">Entrada</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col mb-4 ">
            <label
              htmlFor="client"
              className="font-bold text-sm text-gray-500 w-64"
            >
              {type === "Compra" ? "Comprador" : "Vendedor"}
            </label>
            <select
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
              id="options-select"
              placeholder="description"
              // onClick={(e) => getProducts(e)}
              onChange={(e) => setUser(e.target.value)}
            >
              <option value="" className="flex flex-col mb-4">
                -- Selecione uma opção --
              </option>
              {userOptions.map((option) => (
                <option value={option.name}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col mb-4 ">
          <label
            htmlFor="client"
            className="font-bold text-sm text-gray-500 w-64"
          >
            {type === "Compra" ? "Fornecedor" : "Cliente"}
          </label>
          <select
            className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
            id="options-select"
            placeholder="description"
            // onClick={(e) => getProducts(e)}
            onChange={(e) => setClient(e.target.value)}
          >
            <option value="" className="flex flex-col mb-4">
              -- Selecione uma opção --
            </option>
            {type === "Compra"
              ? supplierOptions.map((option) => (
                  <option value={option.name}>{option.name}</option>
                ))
              : clientOptions.map((option) => (
                  <option value={option.name}>{option.name}</option>
                ))}
          </select>
          <label htmlFor="discount" className="font-bold text-sm text-gray-500">
            % Comissão
          </label>
          <input
            type="number"
            id="comission"
            name="comission"
            value={comission}
            className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full "
            onChange={(e) => {
              setComission(e.target.value);
            }}
          />
        </div>

        <div className="flex justify-between shadow p-3 mb-4 bg-gray-50">
          <div className="flex">
            <div className="flex flex-col mb-4">
              <div></div>
              <label
                htmlFor="product"
                className="font-bold text-sm text-gray-500 w-64 mb-1"
              >
                Produto(s)
              </label>
              <select
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 text-sm w-80"
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

            <div className="flex flex-col mb-4 ml-4">
              <label
                htmlFor="qtde"
                className="font-bold text-sm text-gray-500 mb-1"
              >
                Qtde
              </label>
              <input
                type="number"
                id="qtde"
                name="qtde"
                value={qtde}
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 w-20"
                onChange={(e) => {
                  setTotal_price(qtde * e.target.value);
                  setQtde(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col mb-4  ml-4">
              <label
                htmlFor="salePrice"
                className="font-bold text-sm text-gray-500 mb-1"
              >
                {type === "Compra" || type === "Entrada"
                  ? "Preço de Compra"
                  : "Preço de Venda"}
              </label>
              <input
                type="float"
                id="salePrice"
                name="salePrice"
                value={reference_price}
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 w-32"
                onChange={(e) => {
                  setReference_price(Number(e.target.value));

                  setTotal_price(qtde * e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mb-4  ml-4">
              <label
                htmlFor="discount"
                className="font-bold text-sm text-gray-500 mb-1"
              >
                % Desconto
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={discount}
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 w-20"
                onChange={(e) => {
                  setDiscount(Number(e.target.value));
                }}
              />
            </div>

            <div className="flex flex-col mb-4  ml-4">
              <label
                htmlFor="totalPrice"
                className="font-bold text-sm text-gray-500 mb-1"
              >
                Total
              </label>
              <input
                type="number"
                id="totalPrice"
                name="totalPrice"
                value={Number(total_price * (1 - discount / 100)).toFixed(2)}
                readOnly
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 w-32"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={includeItem}
            className="text-gray-700 text-xl font-bold "
          >
            +
          </button>
        </div>

        {productListItems.map((item) => {
          return (
            <>
              <ul className="flex justify-between bg-gray-50 shadow px-6">
                <li className="px-2 mr-18 w-48 ">{item[0]}</li>
                <li className="px-2 mr-18">{item[1]}</li>
                <li className="px-2 mr-18">{item[2]}</li>
                <li className="px-2 mr-18">{item[3]}</li>
                <li className="px-2 mr-18">{item[4]}</li>
              </ul>
            </>
          );
        })}

        <div className="flex justify-between flex-wrap mt-8">
          <div className="flex flex-col mb-4">
            <div className="flex justify-between flex-wrap ">
              <div className="flex flex-col mb-4 ">

              <label
              htmlFor="totalPrice"
              className="font-bold text-sm text-gray-500"
            >
              Valor Total
            </label>
            <input
                type="number"
                id="totalValue"
                name="totalValue"
                value={totalValue}
                className="border py-2 px-3 text-grey-darkest h-10  shadow-sm bg-opacity-30 px-2 w-20"
                
              />

                <label
                  htmlFor="client"
                  className="font-bold text-sm text-gray-500 w-64"
                >
                  Condição de Pagamento
                </label>
                <select
                  className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
                  id="options-select"
                  placeholder="description"
                  // onClick={(e) => getProducts(e)}
                  onChange={(e) => setCondition_payment(e.target.value)}
                >
                  <option value="" className="flex flex-col mb-4">
                    -- Selecione uma opção --
                  </option>

                  <option value="vista">À vista</option>
                  <option value="prazo">À prazo</option>
                </select>
              </div>

              <div className="flex flex-col ml-20 mb-4">
                <label
                  htmlFor="date"
                  className="font-bold text-sm text-gray-500"
                >
                  Vencimento
                </label>
                <input
                  type="date"
                  id="date"
                  name="vcto"
                  className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 text-sm"
                  onChange={(e) => setVcto(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-4 ">
                <label
                  htmlFor="form_payment"
                  className="font-bold text-sm text-gray-500 w-64"
                >
                  Forma de Pagamento
                </label>
                <select
                  className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 text-sm"
                  id="options-select"
                  placeholder="description"
                  // onClick={(e) => getProducts(e)}
                  onChange={(e) => setForm_payment(e.target.value)}
                >
                  <option value="" className="flex flex-col mb-4">
                    -- Selecione uma opção --
                  </option>

                  <option value="dinheiro">Dinheiro</option>
                  <option value="cheque">Cheque</option>
                  <option value="boleto">Boleto</option>
                  <option value="cartao">Cartão Crédito</option>
                </select>
              </div>
            </div>

            <label
              htmlFor="totalPrice"
              className="font-bold text-sm text-gray-500"
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

        <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white text-base mx-auto p-4 rounded w-full sm:w-auto">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default TransactionAdd;
