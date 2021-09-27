import React, { useState, useEffect } from "react";
import ProductLine from "../components/ProductLine";
import axios from "axios";

function ProductRegister() {
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [purchase_price, setPurchase_price] = useState("");
  const [reference_price, setReference_price] = useState("");
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [counter]);

  const registerProduct = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_API}/products`,
      data: {
        code,
        category,
        name,
        description,
        purchase_price,
        reference_price,
      },
    })
      .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue
        alert("Produto Cadastrado com sucesso!");
        setCode("");
        setCategory("");
        setName("");
        setDescription("");
        setPurchase_price("");
        setReference_price("");
        setCounter(counter + 1);

        console.log(reponse);
        console.log(products);
        console.log(typeof products);
      })
      .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        alert("Preencha todos os campos!");
        console.log(erreur);
      });
  };

  return (
    <div>
      <div className="w-90 bg-white rounded shadow-lg p-8 m-4 md:max-w-2xl md:mx-auto">
        <form
          action="#"
          className="grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); items-center justify-center"
          onSubmit={registerProduct}
        >
          <div className="text-3xl mb-8 text-gray-500">
            Inclusão de Produtos
          </div>

          <div className="flex justify-between ">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="code"
                className="uppercase font-bold text-md text-gray-500 "
              >
                Código
              </label>
              <input
                type="text"
                id="code"
                name="code"
                value={code}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="category"
                className="uppercase font-bold text-md text-gray-500 w-64"
              >
                Categoria
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                className="border py-2 px-3 text-grey-darkest w-full h-10 my-2 shadow-sm bg-opacity-30 px-2"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="uppercase font-bold text-md text-gray-500"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="border py-2 px-3 text-grey-darkest    h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="description"
              className="uppercase font-bold text-md text-gray-500"
            >
              Descrição
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="purchase_price"
                className="uppercase font-bold text-md text-gray-500"
              >
                Preço de Compra
              </label>
              <input
                type="text"
                id="purchase_price"
                name="purchase_price"
                value={purchase_price}
                className="border py-2 px-3 text-grey-darkes h-10 my-2 shadow-sm bg-opacity-30 px-2	w-full"
                onChange={(e) => setPurchase_price(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="reference_price"
                className="uppercase font-bold text-md text-gray-500"
              >
                Preço de Venda
              </label>
              <input
                type="text"
                id="reference_price"
                name="reference_price"
                value={reference_price}
                className="border py-2 px-3 text-grey-darkest h-10 my-2 shadow-sm bg-opacity-30 px-2 w-full"
                onChange={(e) => setReference_price(e.target.value)}
              />
            </div>
          </div>

          <button className="px-5 py-3 bg-red-700 text-white hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded w-full sm:w-auto">
            Cadastrar
          </button>
        </form>

        <div></div>
      </div>
      <div className="mx-20 pb-12">
        <h1 className="text-red-700 text-xl mt-20">Lista de Produtos</h1>
        <table className="table-fixed border w-full">
          <thead className="border ">
            <tr className="border ">
              <th className="w-1/12 px-12 border bg-gray-100">Código</th>
              <th className="w-1/12  px-12 border py-2 bg-gray-100">
                Categoria
              </th>
              <th className="w-2/12 px-12 border bg-gray-100">Nome</th>
              <th className="w-2/12 px-12 border bg-gray-100">Descrição</th>
              <th className="w-1/12 px-12 border bg-gray-100">
                Preço de compra
              </th>
              <th className="w-1/12 px-12 border bg-gray-100">
                Preço de venda
              </th>
              <th className="w-1/12 px-12 border bg-gray-100">Editar</th>
              <th className="w-1/12 px-12 border bg-gray-100">Excluir</th>
            </tr>
          </thead>
        </table>

        {products.map((product) => (
          <ProductLine key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductRegister;
